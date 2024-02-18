import React from 'react'
import Image from 'next/image'
import Title from '@/assets/title.png'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.delivery}> Livraison 5€ / Offerte à partir de 50€ d'achats </p>
      <section className={styles.title}>           
        <Image
          src={Title}
          height={80}
          width={350}
          priority
          className={styles.logo}
          alt='titre'
        />              
      </section>
    </header>
  )
}