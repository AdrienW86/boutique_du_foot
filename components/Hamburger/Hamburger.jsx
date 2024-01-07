import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Basket from '@/assets/basket.png';
import styles from './hamburger.module.css';

const Hamburger = ({productsLength}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={styles.hamburger_container}>
      <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle}>
        <span className={styles.line}> </span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      {isMenuOpen && (
        <ul className={styles.menu}>
          <li className={styles.menu_link}><Link href='/'> Accueil </Link> </li>
          <li className={styles.menu_link}><Link href='/shop'> Boutique </Link>  </li>
         
        </ul>
      )}
       <li className={styles.menu_basket}>
            <Image 
                src={Basket}
                height={30}
                width={30}
                className={styles.logoBasket}
            />
          <Link href='/card'> {productsLength === 0 ? null : <span className={styles.span}>{productsLength && `${productsLength}`}</span> }</Link></li>
    </section>
  );
};
export default Hamburger;