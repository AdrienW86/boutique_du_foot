import React from 'react'
import Image from 'next/image'
import Banner from '@/assets/short.jpg'
import PaymentBanner from '@/components/PaymentBanner/PaymentBanner'
import styles from '@/styles/mens.module.css'

export default function shorts() {
  return (
    <section className={styles.container}>
        <div >    
          <section className={styles.banner}>       
            <h1 className={styles.h1}> Les shorts Hommes </h1>
              <p className={styles.description}>                
                Découvrez notre collection de shorts pour Hommes. Livraison rapide et gratuite à partir de 100€ d'achats.
              </p>
            <Image 
                src={Banner}
                fill
                priority       
                alt='banner'
                className={styles.background}
            />  
            </section>           
        </div>
    </section>
  )
}