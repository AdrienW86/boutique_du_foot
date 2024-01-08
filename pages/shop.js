import React, { useState } from 'react';
import Image from 'next/image'
import Banner1 from '@/assets/banner1.png'
import Banner2 from '@/assets/banner2.png'
import Banner3 from '@/assets/banner8.png'
import Card from '@/components/Card/Card'
import Socket from '@/components/Socket/Socket'
import { data } from '@/data'
import styles from '@/styles/Home.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function boutique() {

  const [selectedSection, setSelectedSection] = useState('');

  const handleDropdownChange = (event) => {
    setSelectedSection(event.target.value);
    // Scroll vers la section correspondante ici (utilisez `document.getElementById` et `scrollTo`)
    const element = document.getElementById(event.target.value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

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
       <Slider  {...settings}>
      <div className={styles.banner}>   
        <Image 
          src={Banner2}
          width={1200}
          height={800}
          layout = 'responsive'
          priority       
          alt='banner'
        />
        <div className={styles.btnBannerBox}>
          <button className={styles.btnBanner}> Voir </button>
        </div>
      </div>
      <div className={styles.banner}>
        <Image 
          src={Banner1}
          width={1200}
          height={800}
          layout = 'responsive'
          priority       
          alt='banner'
        />
        <div className={styles.btnBannerBox}>
          <button className={styles.btnBanner}> Voir </button>
        </div>
      </div>
      <div className={styles.banner}>
        <Image 
          src={Banner3}
          width={1200}
          height={800}
          layout = 'responsive'
          priority       
          alt='banner'
        />
         <div className={styles.btnBannerBox2}>
        <button className={styles.btnBanner}> Voir </button>
        </div>
      </div>     
      </Slider>
      <h2 className={styles.shopTitle}> La boutique </h2>
        <label className={styles.label} htmlFor="sectionDropdown">Choisissez une catégorie :</label>
        <select id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
          <option value="">-- Sélectionnez une section --</option>
          <option value="equipement">L'équipement</option>
          <option value="pharmacie">Pharmacie</option>
          <option value="maillots">Les maillots</option>
        </select>

    
         <div id="equipement" className={styles.hero}>     
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
        <div id="pharmacie" className={styles.hero}>     
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
        <div id="maillots" className={styles.hero}>         
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
