import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel/Carousel'
import CarouselVideo from '@/components/CarouselVideo/CarouselVideo'
import Banner1 from '@/assets/maillot-categorie.jpg'
import Banner2 from '@/assets/tapedesign.jpg'
import Banner3 from '@/assets/tiger.webp'
import Banner4 from '@/assets/bon-plan.jpg'
import styles from './category.module.css'

export default function Category() {
  return (
    <>
      <h1 id="collection" className={styles.title}> NOS COLLECTIONS </h1>
        <Carousel />
          <Link href="/maillots">
            <h2 id="maillots" className={styles.title2}> LES MAILLOTS </h2>     
              <section className={styles.banner}>
                <Image 
                  src={Banner1}
                  fill
                  priority       
                  alt='banner'
                />  
              </section>
          </Link>
      <Link href="/sockets"> 
        <h2 id="chaussettes"  className={styles.title2}> LES CHAUSSETTES </h2>     
          <section className={styles.banner}>
            <Image 
              src={Banner2}
              fill
              priority       
              alt='banner'
            />  
          </section>
      </Link>
      <Link href="/balms">
        <h2 className={styles.title2}> LES BAUMES </h2>    
          <section className={styles.banner}>
            <Image 
              src={Banner3}
              fill
              priority       
              alt='banner'
            />  
          </section>
      </Link>
      <Link href="/good-deal">
        <h2 className={styles.title}> NOS COFFRETS </h2>
          <CarouselVideo />
        <h3 className={styles.title2}> LES BONS PLANS </h3>
        <section className={styles.banner}>     
          <Image 
            src={Banner4}
            fill
            priority       
            alt='banner'
          />  
          <button className={styles.btn}>
            Découvrir les offres
          </button>
        </section>
      </Link>
    </>   
  )
}