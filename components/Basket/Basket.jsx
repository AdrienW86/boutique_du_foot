import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './basket.module.css';
import { loadStripe } from '@stripe/stripe-js';
import dotenv from 'dotenv';
dotenv.config();

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const cartChangeEvent = new Event('cartChange');

export default function Basket() {
  const [products, setProducts] = useState([]);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ products }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (result.error) {
        console.error(result.error.message);
      }
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };
  
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  }, []);

  const addToCart = (el) => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(el);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log('Produit ajouté au panier :', el);
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  };

  const deleteAllCart = (el) => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts = storedProducts.filter(product => product.id !== el.id); 
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log('Tous les produits avec l\'identifiant', el.id, 'ont été supprimés du panier');
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  };

  const deleteToCart = (el) => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const indexToRemove = storedProducts.findIndex((product) => product.id === el.id);
  
    if (indexToRemove !== -1) {
      storedProducts.splice(indexToRemove, 1);
      localStorage.setItem('products', JSON.stringify(storedProducts));
      console.log('Produit supprimé du panier :', el);
      setProducts(storedProducts);
      window.dispatchEvent(cartChangeEvent);
    }
  };
  
  const getUniqueProducts = () => {
    const uniqueProducts = products.reduce((acc, currentProduct) => {
      const existingProduct = acc.find(
        (item) => item.id === currentProduct.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        acc.push({ ...currentProduct, quantity: 1 });
      }
      return acc;
    }, []);
    return uniqueProducts;
  };

  const calculateTotalAmount = () => {
    const uniqueProducts = getUniqueProducts();
    let totalAmount = 0;
    uniqueProducts.forEach((el) => {
      totalAmount += el.quantity * el.price;
    });
    return totalAmount;
  };

  return (
    <>
      <h2 className={styles.h2}>Votre panier</h2>
      <section className={styles.basket}>
        {products.length === 0 ? (
          <div className={styles.warning}>Vous n'avez aucun produit dans votre panier</div>
        ) : (
          <div className={styles.container}>           
            {getUniqueProducts().map((el, index) => (
              <div key={index} className={styles.product}>
                  <button onClick={()=> deleteAllCart(el)} className={styles.close}>X</button>
                <p className={styles.name}>{el.name}</p>
                <div className={styles.infos}> 
                  <p className={styles.quantity}>Quantité: {el.quantity}</p>
                  <p className={styles.price}>Prix: {el.price}€</p>                                
                </div>
                <div className={styles.pictureAndBtnContainer}>                   
                  <button
                    onClick={() => addToCart(el)}
                    className={styles.addBtn}
                  >
                  +
                  </button>
                  <Image
                    className={styles.picture}
                    src={el.recto}
                    height={100}
                    width={100}
                    alt='image produit'
                  />
                  <button
                    onClick={() => deleteToCart(el)}
                    className={styles.removeBtn}
                  >
                    -
                  </button>
                </div>
                <div> 
                 <p className={styles.total}> Total:
                  <span className={styles.spanTotal}>  {el.quantity*el.price}€ </span>
                </p>
                </div>
              </div>
            ))}
             <div className={styles.productPriceTotal}>
                <p> Montant total de la commande : 
                  <span className={styles.spanTotal}> {calculateTotalAmount()}€ </span>
                </p>
            </div>
            <div className={styles.box}>
              <button className={styles.validate} onClick={() => handlePayment(products)}>Valider</button>
            </div>
          </div>
        )}      
      </section>
    </>
  );
}