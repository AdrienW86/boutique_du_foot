import React from 'react';
import Image from 'next/image';
import Card from '@/components/Card/Card';
import Banner from '@/assets/soldes.jpg'
import Link from 'next/link'
import { data } from '@/data/soldes';
import PaymentBanner from '@/components/PaymentBanner/PaymentBanner';
import styles from '@/styles/good-deal.module.css'

export default function Deal() {
  return (
    <section className={styles.container}>
      <section className={styles.banner}>       
        <h1 className={styles.h1}> Les Bonnes affaires </h1>
          <p className={styles.description}>                
             Venez profitez de nos bonnes affaires du moment
          </p>
          <Image 
            src={Banner}
            fill
            priority       
            alt='banner'
            className={styles.background}
          />  
      </section> 
      <section className={styles.soldesBox}>
        {data.tigers.map((el, index) => (
          <div className={styles.soldes}>
            <Link key={el.id} href={`/product-details/${el.id}?name=${el.name}&recto=${el.recto}&verso=${null}&price=${el.price}&link=${el.link}&sizes=${null}&description=${el.description}`}>    
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                recto={el.recto}
                price={el.price}                     
                description={el.description}                    
              />    
            </Link>
          </div>
        ))}
      </section> 
      <section className={styles.soldesBox}>
        {data.sockets.map((el, index) => (
          <div className={styles.soldes}>
            <Link key={el.id} href={`/product-details/${el.id}?name=${el.name}&recto=${el.recto}&verso=${null}&price=${el.price}&link=${el.link}&sizes=${null}&description=${el.description}`}>    
              <Card
                key={el.id}
                id={el.id}
                name={el.name}
                recto={el.recto}
                price={el.price}                     
                description={el.description}                    
              />    
            </Link>
          </div>
        ))}
      </section> 
      <PaymentBanner />
    </section>
  )
}
