// Card.js
import React, { useState, useEffect } from 'react';
import ImageModal from '@/components/ImageModal/ImageModal'; 
import Image from 'next/image';
import styles from './card.module.css';
import { useRouter } from 'next/router';

const cartChangeEvent = new Event('cartChange');

export default function Card(props) {
  const [toggle, setToggle] = useState(false);
  const [selectedSize, setSelectedSize] = useState('S'); // Default size is 'S'
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);

    // Dispatch the event whenever the cart changes
    window.dispatchEvent(cartChangeEvent);
  }, []);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const addToCart = () => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const productWithSize = { ...props, selectedSize };
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
          alt='Product image'
          onClick={handleShowImage} // Open modal on image click
        />
      ) : (
        <Image
          src={props.recto}
          width={150}
          height={150}
          priority
          className={styles.picture}
          alt='Product image'
          onClick={handleShowImage} // Open modal on image click
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
      {props.selectedSize && (
        <div className={styles.div}>
          <p className={styles.selectLabel}> Sélectionnez la taille :</p>
            <select className={styles.select} value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select> 
        </div>
      )}
      <button className={styles.addBtn} onClick={addToCart}>
        Ajouter au panier
      </button>

      {showModal && (
        <ImageModal imageUrl={toggle ? props.verso : props.recto} onClose={handleCloseModal} />
      )}
    </div>
  );
}
