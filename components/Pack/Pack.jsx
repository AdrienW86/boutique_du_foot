import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import ImageModal from '@/components/ImageModal/ImageModal'; 
import styles from './pack.module.css';

const cartChangeEvent = new Event('cartChange');

export default function Packs(props) {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const descriptionRef = useRef(null);

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
    alert('Le produit a été ajouté à votre panier');
  };

  const handleShowImage = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleClickOutside = (event) => {
    if (descriptionRef.current && !descriptionRef.current.contains(event.target)) {
      setShowDescription(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
          onClick={handleShowImage} 
        />  
        <p className={styles.price}> <span className={styles.span}> Prix: </span>  {props.price}€</p>
        <h4> Description </h4>
        <div ref={descriptionRef}>
          <button onClick={handleToggleDescription}>Voir</button>
          {showDescription && (
            <div className={styles.description}>
                <button onClick={handleToggleDescription} className={styles.close}> X </button>
                {props.description}
            </div>
          )}
        </div>
        <button className={styles.addBtn} onClick={() => addToCart(props)} >
          Ajouter au panier
        </button>
        {showModal && (
          <ImageModal imageUrl={props.recto} onClose={handleCloseModal} />
        )}
    </div> 
  );
}
