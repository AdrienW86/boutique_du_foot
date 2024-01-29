import connectDB from './db';
import Order from './Order';
import dotenv from 'dotenv';
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Établissez la connexion à la base de données au démarrage de l'application
connectDB();

async function handler(req, res) {
  const event = req.body;

  try {
    // Vérifiez l'authenticité de l'événement
    const webhookEvent = stripe.webhooks.constructEvent(
      req.body,
      req.headers['stripe-signature'],
      process.env.STRIPE_WEBHOOK_SECRET
    );

    // Traitez l'événement en fonction de son type
    switch (webhookEvent.type) {
      case 'checkout.session.completed':
        const session = webhookEvent.data.object;
        
        // Récupérez les informations pertinentes de la session de paiement
        const customerEmail = session.customer_email;
        const lineItems = session.display_items.map(item => ({
          name: item.custom.name,
          price: item.amount / 100, // Le prix est en cents, convertissez-le en euros
        }));
        const shippingAddress = session.shipping.address;

        // Enregistrez les détails de la commande dans votre base de données MongoDB
        await saveOrderDetails(customerEmail, lineItems, shippingAddress);

        break;
      // Traitez d'autres types d'événements webhook selon vos besoins

      default:
        console.log(`Unhandled event type: ${webhookEvent.type}`);
    }

    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error.message);
    res.status(400).send(`Webhook Error: ${error.message}`);
  }
}

// Fonction pour enregistrer les détails de la commande dans la base de données MongoDB
async function saveOrderDetails(customerEmail, lineItems, shippingAddress) {
  try {
    // Créez un nouvel objet Order avec les détails de la commande et enregistrez-le dans la base de données MongoDB
    const newOrder = new Order({
      customerEmail: customerEmail,
      products: lineItems,
      shippingAddress: shippingAddress,
    });

    await newOrder.save();
    console.log('Order details saved:', newOrder);
  } catch (error) {
    console.error('Error saving order details:', error.message);
    throw error;
  }
}

export default handler;