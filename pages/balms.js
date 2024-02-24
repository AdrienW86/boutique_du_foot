import React from 'react';
import Image from 'next/image';
import Card from '@/components/Card/Card';
import Banner from '@/assets/tiger.jpg'
import PaymentBanner from '@/components/PaymentBanner/PaymentBanner'
import { data } from '@/data/tiger';
import Link from 'next/link'
import styles from '@/styles/mens.module.css';

export default function TBalm() {

  return (
    <section className={styles.container}>
      <section className={styles.banner}>
        <p className={styles.description}>
          Découvrez les baumes du tigre. Livraison rapide et gratuite à partir de 100€ d'achats.
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
      {data.tiger.map((el, index) => (
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

