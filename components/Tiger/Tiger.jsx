import React, { useState, useEffect } from 'react';
import ImageModal from '@/components/ImageModal/ImageModal'; 
import Image from 'next/image';
import styles from './tiger.module.css';

const cartChangeEvent = new Event('cartChange');

export default function Tiger(props) {
  const [toggle, setToggle] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);

    window.dispatchEvent(cartChangeEvent);
  }, []);

  const Toggle = () => {
    setToggle(!toggle);
  };

  console.log(props.selectedSize)

  const addToCart = () => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  
    storedProducts.push(props); 
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log('Product added to the cart:', props);
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
    alert('Le produit a bien été ajouté au panier');
  };
  
  const handleShowImage = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          alt='Product image'
          onClick={handleShowImage} 
        />
      ) : (
        <Image
          src={props.recto}
          width={150}
          height={150}
          priority
          className={styles.picture}
          alt='Product image'
          onClick={handleShowImage} 
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
          alt='Miniature image of the product'
        />
        <Image
          src={props.verso}
          width={60}
          height={60}
          priority
          className={styles.btnCardRecto}
          onClick={Toggle}
          alt='Miniature image of the product'
        />
      </div>
      <p className={styles.price}>
        <span className={styles.span}> Prix: </span> {props.price}€
      </p>
      
      <button className={styles.addBtn} onClick={addToCart}>
        Ajouter au panier
      </button>
      {showModal && (
        <ImageModal imageUrl={toggle ? props.verso : props.recto} onClose={handleCloseModal} />
      )}
    </div>
  );
}