import mongoose from 'mongoose';

const { Schema } = mongoose;

const orderSchema = new Schema({
  customerEmail: { type: String, required: true },
  products: [{
    name: { type: String, required: true },
    price: { type: Number, required: true },
  }],
  shippingAddress: {
    // Définissez la structure de l'adresse postale
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  createdAt: { type: Date, default: Date.now },
});
const Order = mongoose.model('Order', orderSchema);

export default Order;