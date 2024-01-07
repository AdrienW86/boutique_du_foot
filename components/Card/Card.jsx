import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './card.module.css';
import { useRouter } from 'next/router';

const cartChangeEvent = new Event('cartChange');

export default function Card(props) {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    
    // Dispatchez l'événement chaque fois que le panier change
    window.dispatchEvent(cartChangeEvent);
  }, []);

  const Toggle = () => {
    setToggle(!toggle);
  };

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
  

  const navigation = (url) => {
    router.push(url);
  };

  return (
    <div className={styles.card}>
      <h3 className={styles.h3}> {props.name} </h3>
      {toggle ? (
        <Image
          src={props.verso}
          width={150}
          height={150}
          priority
          className={styles.picture}
          alt='image du produit'
        />
      ) : (
        <Image
          src={props.recto}
          width={150}
          height={150}
          priority
          className={styles.picture}
          alt='image du produit'
        />
      )}
      <div className={styles.btnContainer}>
        <Image
          src={props.recto}
          width={60}
          height={60}
          priority
          className={styles.btnCardRecto}
          onClick={Toggle}
          alt='image miniature du produit'
        />
        <Image
          src={props.verso}
          width={60}
          height={60}
          priority
          className={styles.btnCardRecto}
          onClick={Toggle}
          alt='image miniature du produit'
        />
      </div>
      <p className={styles.price}>
        <span className={styles.span}> Prix: </span> {props.price}€
      </p>
      <button className={styles.addBtn} onClick={() => addToCart(props)}>
        Ajouter au panier
      </button>
    </div>
  );
}
