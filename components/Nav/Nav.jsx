import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Hamburger from '../Hamburger/Hamburger';
import styles from './nav.module.css';

export default function Nav() {

  const [isResponsive, setIsResponsive] = useState(false);
  const router = useRouter();
  const activePath = router.pathname;
  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    if (typeof localStorage !== 'undefined') {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductsLength(storedProducts.length);
    } else {
      console.error('localStorage is not supported in this environment.');
    }

    // Écoutez l'événement cartChange pour mettre à jour la quantité de produits
    const updateProductsLength = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductsLength(storedProducts.length);
    };

    window.addEventListener('cartChange', updateProductsLength);

    // Nettoyez l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener('cartChange', updateProductsLength);
    };
  }, [router.pathname]);

  useEffect(() => {

   

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
      }
    };
  window.addEventListener('resize', handleResize);

  // Vérifie la taille de l'écran lors du chargement initial
  handleResize();

  // Nettoie les écouteurs d'événements lorsque le composant est démonté
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


  

  return (
    <nav className={styles.nav}>
      {isResponsive 
      ?
      <Hamburger productsLength={productsLength} className={styles.hamburger} />  
      :
      
      <ul className={styles.ul}>
        <li className={activePath === '/' ? styles.active : styles.li}>
          <Link href='/'>Accueil</Link>
        </li>
        <li className={activePath === '/shop' ? styles.active : styles.li}>
          <Link href='/shop'>Boutique</Link>
        </li>
        <li className={activePath === '/card' ? styles.active : styles.li}>
          <Link href='/card'>Panier {productsLength === 0 ? null : <span className={styles.span}>{productsLength && `${productsLength}`}</span> }</Link>
        </li>
      </ul>
    }
    </nav>
  );
}
