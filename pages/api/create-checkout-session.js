const { v4: uuidv4 } = require('uuid');
import dotenv from 'dotenv';
dotenv.config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function handler(req, res) {
  try {
    console.log(req.body);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.products.map(product => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name,
           // images: [product.recto.src], // Assurez-vous que 'src' est une chaîne de caractères
          },
          unit_amount: product.price * 100,
        },
        quantity: 1, // Assurez-vous d'avoir une valeur de quantité
      })),
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
      customer_email: req.body.customer_email, // Ajoutez l'e-mail du client ici
      billing_address_collection: 'required', // Demander l'adresse de facturation
    });

    res.status(200).json({ sessionId: session.id });
    console.log('Session ID:', session.id);
  } catch (error) {
    console.error('Error creating checkout session:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default handler;