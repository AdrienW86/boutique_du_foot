import React from 'react';
import Link from 'next/link'
import styles from './categoryCarousel.module.css'

function CategoryCarousel(props) {
  
  return (
   <div className={styles.container}>
      <section className={styles.row}>
        <Link href={props.sportswear}>
          <div className={styles.section}>
            <div className={styles.card}>
              <button className={styles.btn}> Survêtements </button>
            </div>            
          </div>
        </Link>
        <Link href={props.maillots}>
          <div className={styles.section}>
            <div className={styles.card}>
              <button className={styles.btn}> Maillots </button>
            </div>          
          </div>
        </Link>
      </section>
     <section className={styles.row}>
      {/* <Link href={props.shorts}>
          <div className={styles.section}>
            <div className={styles.card}>
              <button className={styles.btn}> Shorts </button>
            </div>           
          </div>
        </Link> */}
        <Link href={props.accessoires}>
          <div className={styles.section}>
            <div className={styles.card}>
              <button className={styles.btn}> Accessoires </button>
            </div>
          </div>
        </Link>
     </section>
    </div>
  );
}

export default CategoryCarousel;