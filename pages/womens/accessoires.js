import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '@/components/Card/Card'
import {data} from '@/data/accessoires'
import Banner from '@/assets/accessoires.jpg'
import PaymentBanner from '@/components/PaymentBanner/PaymentBanner'
import styles from '@/styles/mens.module.css'

export default function accessoires() {
  return (
    <section className={styles.container}>
      <section className={styles.banner}>       
        <h1 className={styles.h1}> Les accessoires </h1>
          <p className={styles.description}>                
            Découvrez notre collection d'accessoires pour Femmes. Livraison rapide et gratuite à partir de 100€ d'achats.
          </p>
          <Image 
            src={Banner}
            fill
            priority       
            alt='banner'
            className={styles.background}
          />  
      </section>           
      <section className={styles.cardContainer}>
      {data.accessoires.map((el, index) => (
        <div className={styles.link}>
          <Link key={el.id} href={`/product-details/${el.id}?name=${el.name}&recto=${el.recto}&verso=${el.verso}&price=${el.price}&link=${el.link}&sizes=${null}&description=${el.description}`}>    
            <Card
              key={el.id}
              id={el.id}
              name={el.name}
              recto={el.recto}
              verso={el.verso}
              price={el.price}
              description={el.description}
            />    
          </Link>
        </div>
      ))}
      </section>
      <PaymentBanner/> 
    </section>
  )
}