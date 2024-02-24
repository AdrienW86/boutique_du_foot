import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/assets/banner-coffret.png'
import CardCoffret from '@/components/CardCoffret/CardCoffret'
import {data} from '@/data/box'
import PaymentBanner from '@/components/PaymentBanner/PaymentBanner'
import CarouselVideo from '@/components/CarouselVideo/CarouselVideo'
import styles from '@/styles/box.module.css'

export default function boxs() {
  return (
    <div className={styles.container}>    
      <section className={styles.banner}>       
        <h1 className={styles.h1}> Les Coffrets </h1>
          <p className={styles.description}>                
            Choississez par un de nos coffrets ou composez-vous même le vôtre.
            </p>
          <Image 
            src={Banner}
            fill
            priority       
            alt='banner'
            className={styles.background}
          />  
        </section> 
        <h2 className={styles.h2}> La sélection du mois </h2>
                 
          <CarouselVideo />
       
        <section className={styles.box}>
          {data.box.map((el, index)=> (
            <section key={index}>
              <div className={styles.coffret}>       
                <h3 className={styles.h3}>  {el.name} </h3>
                <Link key={el.id} href={`/coffret-details/${el.id}?name=${el.name}&recto=${el.recto}&verso=${el.verso}&price=${el.price}&link=${el.link}&sizes=${el.sizes}&color=${el.color}&description=${el.description}`}>    
                  <CardCoffret
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    recto={el.recto}
                    price={el.price}              
                    description={el.description}             
                  />   
                </Link>      
              </div> 
              <p className={styles.descriptionP}> {el.description}</p>
            </section>
          ))}        
        </section>   
        <PaymentBanner/>     
    </div>
  )
}