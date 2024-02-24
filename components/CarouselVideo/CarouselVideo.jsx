import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './carousel.module.css';

function CustomSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    centerMode: true, 
    centerPadding: '65px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      }
    ]
  };

  return (
    <Slider {...settings} className={styles.slider}>
      <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.info}> 
           AJAX AMSTERDAM
          </div>
        <video poster="/nasser2.png" controls className={styles.banner} preload="auto">
        <source src="/nasser2.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
        </div>
        <h3 className={styles.h3}> COFFRET AJAX AMSTERDAM</h3>
        <p className={styles.p}> Découvrir la sélection de Nasdas </p>
      </div>
      <div className={styles.section}>
        <div className={styles.card}>
          <div className={styles.info}> 
            MANCHESTER CITY
          </div>
        <video poster="/farah.png" controls className={styles.banner} preload="auto">
        <source src="/farah.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
        </div>
        <h3 className={styles.h3}> COFFRET MANCHESTER CITY</h3>
        <p className={styles.p}> Découvrir la sélection de Farah</p> 
      </div>
      <div className={styles.section}>
        <div className={styles.card}>
        <div className={styles.info}> 
            TUNISIE
          </div>
        <video poster="/tounsi.png" controls className={styles.banner} preload="auto">
        <source src="/tounsi.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos au format MP4.
      </video>
        </div>
        <h3 className={styles.h3}> COFFRET TUNISIE</h3>
        <p className={styles.p}> Découvrir la sélection de Tounsi</p>
      </div>
    </Slider>
  );
}

export default CustomSlider;


