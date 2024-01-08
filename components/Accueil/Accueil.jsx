import React, {useState} from 'react'
import Image from 'next/image'
import Player from '@/assets/player.png'
import Player2 from '@/assets/player2.png'
import Player3 from '@/assets/player3.png'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '@/styles/Home.module.css'
import Banner1 from '@/assets/banner1.png'
import Banner2 from '@/assets/banner2.png'
import Banner3 from '@/assets/banner8.png'
import Banner4 from '@/assets/banner5.png'
import Banner5 from '@/assets/banner6.png'
import Banner6 from '@/assets/banner9.png'

export default function Accueil() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 3000,  
  };

  return (
    <section className={styles.home}>
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
      <div className={styles.hero}>
        <Image 
          src={Player}
          width={80}
          height={80}
          alt='image title'
        />
        <h2 className={styles.h2}> Les bons plans </h2>
      </div>     
      <div className={styles.banner}>
        <Image 
          src={Banner4}
          width={150}
          height={150}
          layout = 'responsive'
          priority       
          alt='banner'   
        /> 
        <div className={styles.btnBannerBox}>
          <button className={styles.btnBanner}> Voir </button>
        </div>
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
      <div className={styles.banner}>
        <Image 
          src={Banner5}
          width={150}
          height={150}
          layout = 'responsive'
          priority       
          alt='banner'   
        /> 
        <div className={styles.btnBannerBox}>
          <button className={styles.btnBanner}> Voir </button>
        </div>
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
     <div className={styles.banner}>
     <Image 
         src={Banner6}
         width={150}
         height={150}
         layout = 'responsive'
         priority       
         alt='banner'   
       /> 
       <div className={styles.btnBannerBox}>
       <button className={styles.btnBanner}> Voir </button>
       </div>
     </div>   
    </section>
  )
}