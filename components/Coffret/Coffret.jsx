import React, { useState, useEffect, useRef } from 'react';
import ImageModal from '@/components/ImageModal/ImageModal'; 
import Image from 'next/image';
import Arrow from '@/assets/arroww.png'
import styles from './coffret.module.css';

const cartChangeEvent = new Event('cartChange');

export default function Coffret(props) {
  const [toggle, setToggle] = useState(false);
  const [selectedSize, setSelectedSize] = useState('S'); 
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [showDescription, setShowDescription] = useState(false);
  const descriptionRef = useRef(null);

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
    let productWithSize = { ...props };
    
    if (selectedSize) {
      productWithSize.name = `${props.name} - Taille ${selectedSize}`;
      productWithSize.selectedSize = selectedSize;
    }
  
    storedProducts.push(productWithSize);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    console.log('Product added to the cart:', productWithSize);
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
          width={300}
          height={250}
          priority
          className={styles.picture}
          alt='Product image'
          onClick={handleShowImage} 
        />
      ) : (
        <Image
          src={props.recto}
          width={300}
          height={250}
          priority
          className={styles.picture2}
          alt='Product image'
          onClick={handleShowImage} 
        />
      )}
      <div className={styles.btnContainer}>
        <Image
          src={props.recto}
          width={120}
          height={100}
          priority
          className={styles.btnCardRecto}
          onClick={Toggle}
          alt='Miniature image of the product'
        />
        <Image
          src={props.verso}
          width={120}
          height={100}
          priority
          className={styles.btnCardRecto}
          onClick={Toggle}
          alt='Miniature image of the product'
        />
      </div>
      <p className={styles.price}>
        <span className={styles.span}> Prix: </span> {props.price}€
      </p>
      {props.sizes && (
        <div className={styles.div}> 
          <p className={styles.selectLabel}> Sélectionnez la taille du maillot:</p>
          <select className={styles.select} value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>
      )}
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