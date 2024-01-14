import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import ImageModal from '@/components/ImageModal/ImageModal'; 
import styles from '@/components/Card/card.module.css'

const cartChangeEvent = new Event('cartChange');

export default function Socket(props) {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

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
    alert('Le produit a été ajouté à votre panier')
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
          <button className={styles.addBtn}onClick={() => addToCart(props)} >
            Ajouter au panier
          </button>
          {showModal && (
            <ImageModal imageUrl={props.recto} onClose={handleCloseModal} />
          )}
    </div> 
  )
}
