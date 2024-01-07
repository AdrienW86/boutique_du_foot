import React from 'react'
import Image from 'next/image'
import Background2 from '@/assets/background2.jpg'
import Card from '@/components/Card/Card'
import Socket from '@/components/Socket/Socket'
import { data } from '@/data'
import styles from '@/styles/Home.module.css'

export default function boutique() {
  return (
    <section className={styles.home}>
      <div className={styles.banner}>
        <Image 
          src={Background2}
          width={800}
          height={400}
          layout = 'responsive'
          priority        
          alt='banner'
        />
        </div>
        <div className={styles.hero}>       
          <h2 className={styles.h2}> L'équipement </h2>
        </div>
        <div className={styles.container}>
        {data.socket.map((el, index)=> (
          <Socket 
            key={index}
            id={el.id}
            name={el.name}
            recto={el.recto}
            price={el.price}
          /> 
        ))}           
        </div>
        <div className={styles.hero}>         
          <h2 className={styles.h2}> Pharmacie </h2>
        </div>
        <div className={styles.container}>
          {data.soin.map((el, index)=> (
            <Card 
              key={index}
              id={el.id}
              name={el.name}
              recto={el.recto}
              verso={el.verso}
              price={el.price}
              link={el.link}
            /> 
          ))}   
        </div>
        <div className={styles.hero}>           
          <h2 className={styles.h2}> Les maillots </h2>
        </div>
        <div className={styles.container}>
        {data.maillot.map((el, index)=> (
            <Card 
              key={index}
              id={el.id}
              name={el.name}
              recto={el.recto}
              verso={el.verso}
              price={el.price}
              link={el.link}
            /> 
          ))}   
        </div>
    </section>
  )
}
