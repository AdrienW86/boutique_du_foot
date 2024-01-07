import React, {useState} from 'react'
import Image from 'next/image'
import Player from '@/assets/player.png'
import Player2 from '@/assets/player2.png'
import Player3 from '@/assets/player3.png'
import Background from '@/assets/background.jpg'
import Card from '../Card/Card'
import { data } from '@/data'
import styles from '@/styles/Home.module.css'

export default function Accueil() {

  
  
  return (
    <section className={styles.home}>
      <div className={styles.banner}>
        <Image 
          src={Background}
          width={1200}
          height={800}
          layout = 'responsive'
          priority       
          alt='banner'
        />
      </div>
      <div className={styles.hero}>
        <Image 
          src={Player}
          width={80}
          height={80}
          alt='image title'
        />
        <h2 className={styles.h2}> Les bons plans </h2>
      </div>
      <div className={styles.container}>
        {data.soin.map((el, index)=> (
          <Card 
            key={index}
            name={el.name}
            recto={el.recto}
            verso={el.verso}
            price={el.price}
            link={el.link}
          /> 
        ))}            
        </div>
        <div className={styles.hero}>
          <Image 
            src={Player2}
            width={80}
            height={80}
            alt='image title'
          />
          <h2 className={styles.h2}> Les populaires </h2>
        </div>
        <div className={styles.container}>
        {data.maillot.map((el, index)=> (
          <Card 
            key={index}
            name={el.name}
            recto={el.recto}
            verso={el.verso}
            price={el.price}
          /> 
        ))}             
        </div>
        <div className={styles.hero}>
          <Image 
            src={Player3}
             width={80}
            height={80}
            priority
            alt='image title'
          />
          <h2 className={styles.h2}> Nouveautés </h2>
        </div>
        <div className={styles.container}>
          {data.maillot.map((el, index)=> (
            <Card 
              key={index}
              name={el.name}
              recto={el.recto}
              verso={el.verso}
              price={el.price}
            /> 
          ))}   
        </div>
    </section>
  )
}