import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Basket from '@/assets/basket.png';
import styles from './button.module.css'

export default function ButtonBox({productsLength, isMenuOpen, handleMenuToggle}) {
  return (
    <div className={styles.buttonBox}>
        <Link  href='/card'> 
            <div className={styles.menu_basket}>
                <Image 
                    src={Basket}
                    height={22}
                    width={22}
                    className={styles.logoBasket}
                    alt="image du panier"
                />         
                {productsLength === 0 ? null : 
                <span className={styles.span}>{productsLength && `${productsLength}`}</span> 
                }
            </div>      
        </Link>
        <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle} aria-label="hamburger button">
            <span className={styles.line}> </span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
    </div>
  )
}
