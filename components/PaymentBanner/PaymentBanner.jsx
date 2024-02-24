import React from 'react'
import Image from 'next/image'
import CreditCard from '@/assets/card.png'
import Support from '@/assets/support.png'
import Delivery from '@/assets/delivery.png'
import Return from '@/assets/return.png'
import styles from './payment.module.css'

export default function PaymentBanner() {
  return (
  <section className={styles.payment}>
    <div className={styles.section}>
      <div className={styles.card}>
        <Image 
          src={CreditCard}
          width={50}
          height={50}
          priority       
          alt='banner'
          className={styles.icons}
        />  
        <p className={styles.p}> Paiement 100% Sécurisé</p>
      </div>
      <div className={styles.card}>
        <Image 
          src={Support}
          width={50}
          height={50}
          priority       
          alt='banner'
          className={styles.icons}
        />  
        <p className={styles.p}> Service client 5j/7 de 14h à 18h</p>
      </div>
    </div>     
    <div className={styles.section}>
      <div className={styles.card}>
        <Image 
          src={Delivery}
          width={50}
          height={50}
          priority       
          alt='banner'
          className={styles.icons}
        />  
        <p className={styles.p}> Livraison offerte dès 100€</p>
      </div>
      <div className={styles.card}>
        <Image 
          src={Return}
          width={50}
          height={50}
          priority       
          alt='banner'
          className={styles.icons}
        />  
        <p className={styles.p}> Retours sous 30 jours</p>
      </div>
    </div>
  </section>
  )
}