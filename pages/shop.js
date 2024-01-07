import React from 'react'
import Image from 'next/image'
import Background from '@/assets/background.jpg'
import Background2 from '@/assets/background2.jpg'
import Card from '@/components/Card/Card'
import Socket from '@/components/Socket/Socket'
import { data } from '@/data'
import styles from '@/styles/Home.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function boutique() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Ajoutez cette ligne
    autoplaySpeed: 3000,  // Durée en millisecondes entre chaque transition automatique
  };

  return (
    <section className={styles.main}>
     <Slider {...settings}>
        <div className={styles.banner}>
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
        {/* Ajoutez d'autres images de bannière ici si nécessaire */}
      </Slider>
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
