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
    if (router.pathname === '/success') {
      // Efface le stockage local si l'URL est "/success"
      localStorage.clear();
    } else {
      // Met à jour la longueur des produits dans le stockage local
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductsLength(storedProducts.length);
    }

    const updateProductsLength = () => {
      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProductsLength(storedProducts.length);
    };

    window.addEventListener('cartChange', updateProductsLength);

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
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      {isResponsive ? (
        <Hamburger productsLength={productsLength} className={styles.hamburger} />
      ) : (
        <ul className={styles.ul}>
          <li className={activePath === '/' ? styles.active : styles.li}>
            <Link href='/'>Accueil</Link>
          </li>
          <li className={activePath === '/shop' ? styles.active : styles.li}>
            <Link href='/shop'>Boutique</Link>
          </li>
          <li className={activePath === '/card' ? styles.active : styles.li}>
            <Link href='/card'>
              Panier {productsLength === 0 ? null : <span className={styles.span}>{productsLength && `${productsLength}`}</span>}
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
