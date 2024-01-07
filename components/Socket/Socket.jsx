import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '@/components/Card/card.module.css'

const cartChangeEvent = new Event('cartChange');

export default function Socket(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    
    // Dispatchez l'événement chaque fois que le panier change
    window.dispatchEvent(cartChangeEvent);
  }, []);

  const addToCart = (el) => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(el);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log('Produit ajouté au panier :', el);

    // Mettez à jour la quantité de produits et dispatchez l'événement
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
    alert('Le produit a été ajouté à votre panier')
  };

  

  return (
    <div className={styles.card}>     
        <h3 className={styles.h3}> {props.name} </h3>                                                
              <Image 
                src={props.recto}
                width={150}
                height={150}
                priority
                className={styles.picture}
                alt='image du produit'
              />  
            <p className={styles.price}> <span className={styles.span}> Prix: </span>  {props.price}€</p>
            <button className={styles.addBtn}onClick={() => addToCart(props)} >
              Ajouter au panier
            </button>
          </div> 
  )
}
