import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './carousel.module.css';

const HeaderCarousel = ({handleMenuToggle}) => {
  const items = [
    {
      text: 'Les meilleurs Prix',
      url: '/good-deal'
    },
    {
      text:  'Baume du tigre 6€',
      url: '/balms'
    },
    {
      text: 'Chaussettes tapedesign 7€',
      url: '/sockets/tapedesign'
    },     
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextItem();
    }, 2000); 

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselItems}>
        {items.map((item, index) => (
          <Link  onClick={handleMenuToggle} href={item.url}  key={index} className={index === currentIndex ? styles.active : styles.inactive}    >
            <div >
            {item.text}
          </div>
          </Link>         
        ))}
      </div>
    </div>
  );
};

export default HeaderCarousel;