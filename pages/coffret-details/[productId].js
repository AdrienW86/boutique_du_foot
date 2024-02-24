import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './product.module.css';

const cartChangeEvent = new Event('cartChange');

export default function ProductDetails() {
  const router = useRouter();
  const { productId, name, recto, verso, price, link, sizes, description } = router.query;

  // Vérifiez si les données nécessaires sont disponibles
  if (!productId || !name || !recto || !verso || !price || !link || !sizes || !description){
    return <div>Chargement...</div>;
  }

  const product = {
    productId,
    name,
    recto,
    verso,
    price,
    link,
    sizes,
    description
  };

  console.log(product)
  

  // État local pour stocker l'URL des images et le bouton actif
  const [currentImage, setCurrentImage] = useState(recto);
  const [activeButton, setActiveButton] = useState('recto');
  const [selectedSize, setSelectedSize] = useState('S'); 
  const [isModalOpen, setIsModalOpen] = useState(false);;
  const [products, setProducts] = useState([]);


  const [selectedColor, setSelectedColor] = useState('S'); 

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
  }, []);

  // Fonction pour basculer entre les images
  const toggleImage = (imageUrl, buttonType) => {
    setCurrentImage(imageUrl);
    setActiveButton(buttonType);
  };

  const addToCart = () => {
    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];  
    let productWithSize = { ...product };
    
    if (selectedSize) {
      productWithSize.name = `${product.name} - Taille ${selectedSize}`;
      productWithSize.selectedSize = selectedSize;
    }
  
    storedProducts.push(productWithSize);
    localStorage.setItem('products', JSON.stringify(storedProducts));
    setProducts(storedProducts);
    window.dispatchEvent(cartChangeEvent);
    alert('Le produit a bien été ajouté au panier');
  };

  return (
    <div className={styles.container}>
      <section className={styles.banner}>                    
        <Image 
          src={currentImage}
          fill
          priority       
          alt='banner'
          onClick={toggleModal}
          className={styles.background}
        />  
        {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <Image 
              src={currentImage}
              fill
              priority       
              alt='banner'
              className={styles.fullScreenImage}
            />  
          </div>
        </div>
      )}
      </section> 
      <div className={styles.btnContainer}>
        <button 
          className={activeButton === 'recto' ? styles.activeButton : styles.button}
          onClick={() => toggleImage(recto, 'recto')}
        >             
        </button>
        {product.verso !== "undefined" &&
          <button 
            className={activeButton === 'verso' ? styles.activeButton : styles.button}
            onClick={() => toggleImage(verso, 'verso')}
          >       
          </button>
        }
      </div>
      <p className={styles.selectSize}> Sélectionnez la taille de votre maillot </p>
      {product.sizes !== "null" &&
       <div className={styles.box}>
        <button 
          className={selectedSize === 'S' ? `${styles.sizeButton} ${styles.active}` : styles.sizeButton}
          onClick={() => setSelectedSize('S')}
        >
        S
        </button>
        <button 
          className={selectedSize === 'M' ? `${styles.sizeButton} ${styles.active}` : styles.sizeButton}
          onClick={() => setSelectedSize('M')}
        >
          M
        </button>
        <button 
          className={selectedSize === 'L' ? `${styles.sizeButton} ${styles.active}` : styles.sizeButton}
          onClick={() => setSelectedSize('L')}
        >
          L
        </button>
        <button 
          className={selectedSize === 'XL' ? `${styles.sizeButton} ${styles.active}` : styles.sizeButton}
          onClick={() => setSelectedSize('XL')}
        >
          XL
        </button>
       </div>
      }
      <h1 className={styles.h1}>{name}</h1>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>Prix: {price}€</p>
      <button className={styles.addBtn} onClick={addToCart}>
        Ajouter au panier
      </button>
     
    </div>
  );
}