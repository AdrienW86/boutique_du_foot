import dotenv from 'dotenv';
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Établissez la connexion à la base de données au démarrage de l'application

async function handler(req, res) {
  try {
    console.log(req.body);

    // Créez une session de paiement avec Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.products.map(product => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
          },
          unit_amount: product.price * 100,
        },
        quantity: 1, 
      })),
      mode: 'payment',
      invoice_creation: {
        enabled: true,
      },
      success_url: 'https://boutiquedufoot.fr/success',
      cancel_url: 'https://boutiquedufoot.fr/cancel',
      customer_email: req.body.customer_email, 
      billing_address_collection: 'required',
    });

    res.status(200).json({ sessionId: session.id });
    console.log('Session ID:', session.id);
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default handler;