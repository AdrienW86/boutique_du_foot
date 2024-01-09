import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Card from '@/components/Card/Card'
import Socket from '@/components/Socket/Socket'
import { data } from '@/data'
import styles from '@/styles/Home.module.css'
import Banner2 from '@/assets/shopBanner.png'
import Arrow from '@/assets/arrow.png'

export default function boutique() {

  const [selectedSection, setSelectedSection] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [selectedSize, setSelectedSize] = useState('M');


  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDropdownChange = (event) => {
    setSelectedSection(event.target.value);
    scrollToSection(event.target.value);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 160; 
      const offsetPosition = element.offsetTop - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleShowImage = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null);
    setShowImageModal(false);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 600; // Vous pouvez ajuster cette valeur

    setShowScrollButton(scrollPosition > scrollThreshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []); 

  return (
    <section className={styles.main}>    
      <div className={styles.banner}>
        <Image 
          src={Banner2}
          width={1200}
          height={800}
          layout = 'responsive'
          priority       
          alt='banner'
        />  
        <div>
          <h2 className={styles.shopTitle}> La boutique </h2>
            <label className={styles.label} htmlFor="sectionDropdown">Choisissez une catégorie :</label>
            <select className={styles.select} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
              <option value="">-- Sélectionnez une catégorie --</option>
              <option value="equipement">Les chaussettes </option>
              <option value="pharmacie">Pharmacie</option>
              <option value="maillots">Les maillots</option>
            </select>  
        </div>
      </div>
        <div id="maillots" className={styles.hero}>         
          <h2 className={styles.h2}> Les maillots </h2>
        </div>
        <div className={styles.container}>
        <h3 className={styles.h3}> Les Clubs </h3>
        <label className={styles.label} htmlFor="sectionDropdown"> Choisissez une ligue :</label>
        <div className={styles.team}> 
         
           
              <select className={styles.select2} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
               
                <option value="ligue1">Ligue 1 </option>
                <option value="liga">Liga</option>
                <option value="seriea">Série A</option>
                <option value="premier">Premier League</option>
              </select> 
            </div>
          {data.team.map((el, index)=> (
            <Card 
              key={index}
              id={el.id}
              name={el.name}
              recto={el.recto}
              verso={el.verso}
              price={el.price}
              link={el.link}
              sizes={el.sizes} 
              selectedSize={selectedSize}
              onSizeChange={(size) => setSelectedSize(size)}
            /> 
          ))}   
        </div>
        <div className={styles.container}>
            <div> 
              <h3 className={styles.h3}> Les équipes nationales </h3>
              <label className={styles.label} htmlFor="sectionDropdown">Choisissez une catégorie :</label>
                <select className={styles.select} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
                  <option value="">-- Sélectionnez une ligue --</option>
                  <option value="equipement">Ligue 1 </option>
                  <option value="pharmacie">Liga</option>
                  <option value="maillots">Série A</option>
                  <option value="maillots">Premier League</option>
                </select> 
            </div>
          {data.country.map((el, index)=> (
            <Card 
              key={index}
              id={el.id}
              name={el.name}
              recto={el.recto}
              verso={el.verso}
              price={el.price}
              link={el.link}
              sizes={el.sizes} 
              selectedSize={selectedSize}
              onSizeChange={(size) => setSelectedSize(size)}
            /> 
          ))}   
        </div>
        <div id="equipement" className={styles.hero}>     
          <h2 className={styles.h2}> Les chaussettes </h2>
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
            /> 
          ))}   
        </div>    
        {showScrollButton && (
        <button className={styles.scrollButton} onClick={scrollToTop}>
         <Image 
          src={Arrow}
          width={20}
          height={20}
          layout = 'responsive'
          priority       
          alt='banner'
          className={styles.picture}
        />  
        </button>
      )}
    </section>
  )
}