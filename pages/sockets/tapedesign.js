import React from 'react';
import Image from 'next/image';
import Card from '@/components/Card/Card';
import Banner from '@/assets/tapedesign.jpg'
import PaymentBanner from '@/components/PaymentBanner/PaymentBanner'
import { data } from '@/data/sockets';
import Link from 'next/link'
import styles from '@/styles/mens.module.css';

export default function TapeDesign() {

  return (
    <section className={styles.container}>
      <section className={styles.banner}>
        <h1 className={styles.h1}>Collection TapeDesign</h1>
        <p className={styles.description}>
          Découvrez notre collection de chaussettes tapedesign. Livraison rapide et gratuite à partir de 100€ d'achats.
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
      {data.tapedesign.map((el, index) => (
        <div className={styles.link}>
          <Link key={el.id} href={`/product-details/${el.id}?name=${el.name}&recto=${el.recto}&verso=${el.verso}&price=${el.price}&link=${el.link}&sizes=${null}&description=${el.description}`}>    
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
      <PaymentBanner/>
    </section>
  );
}
