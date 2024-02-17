import React, { useState, useEffect, useRef } from 'react';
import ImageModal from '@/components/ImageModal/ImageModal'; 
import Image from 'next/image';
import Arrow from '@/assets/arroww.png'
import styles from './tiger.module.css';

const cartChangeEvent = new Event('cartChange');

export default function Tiger(props) {
  const [toggle, setToggle] = useState(false); 
  const [showModal, setShowModal] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const descriptionRef = useRef(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  }, []);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const addToCart = () => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    storedProducts.push(props); 
    localStorage.setItem('products', JSON.stringify(storedProducts));
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
      <div className={styles.titleDescription}>
        <h4> Description </h4>
        <Image
          src={Arrow}
          width={20}
          height={20}
          priority
          alt='Product image'
          className={styles.descriptionBtn} onClick={handleToggleDescription}
        />
      </div>
      <div ref={descriptionRef}>
        {showDescription && (
          <div className={styles.description}>
              <button onClick={handleToggleDescription} className={styles.close}> X </button>
              {props.description}
          </div>
        )}
      </div>
      <button className={styles.addBtn} onClick={addToCart}>
        Ajouter au panier
      </button>
      {showModal && (
        <ImageModal imageUrl={toggle ? props.verso : props.recto} onClose={handleCloseModal} />
      )}
    </div>
  );
}