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
  const [selectedSize, setSelectedSize] = useState('S');

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

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 600; 

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
        <h2 className={styles.shopTitle}> La boutique </h2>      
      </div>
      <label className={styles.label} htmlFor="sectionDropdown">Choisissez une catégorie :</label>
        <div className={styles.team}>       
          <select className={styles.select} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
            <option value="">-- Sélectionnez une catégorie --</option>
            <option value="equipement">Les chaussettes </option>
            <option value="pharmacie">Pharmacie</option>
            <option value="maillots">Les maillots</option>
          </select>  
        </div>
        <div id="maillots" className={styles.hero}>         
          <h2 className={styles.h2}> Les maillots </h2>           
        </div>
        <div className={styles.boxBtn}>
          <button onClick={() => scrollToSection("club")} className={styles.btnCategory}> Par Clubs </button>
          <button onClick={() => scrollToSection("country")} className={styles.btnCategory}> Par Pays </button>
        </div>
        <div className={styles.container}>
          <h3 id="club" className={styles.h3}> Les Clubs </h3>
          <label className={styles.label} htmlFor="sectionDropdown"> Choisissez une ligue :</label>
            <div className={styles.team}>                    
              <select className={styles.select2} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
                <option value="">-- Sélectionnez une catégorie --</option>
                <option value="ligue1">Ligue 1 </option>
                <option value="liga">Liga</option>
                <option value="seriea">Série A</option>
                <option value="premier">Premier League</option>
              </select> 
            </div>
            <h4 id="ligue1" className={styles.h4}> La Ligue 1 </h4>
            {data.ligue1.map((el, index)=> (
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
            <h4 id="liga" className={styles.h4}> La Liga </h4>
            {data.liga.map((el, index)=> (
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
            <h4 id="seriea" className={styles.h4}> La série A </h4>
            {data.serie.map((el, index)=> (
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
            <h4 id="premier" className={styles.h4}> La Premier League </h4>
            {data.premier.map((el, index)=> (
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
          <h3 id="country" className={styles.h3}> Les équipes nationales </h3>
            <label className={styles.label} htmlFor="sectionDropdown">Choisissez un continent :</label>
            <div className={styles.team}>               
              <select className={styles.select} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
                <option value="">-- Sélectionnez un continent --</option>
                <option value="europe">Europe </option>
                <option value="afrique">Afrique</option>
              </select> 
            </div>
            <h4 id="europe" className={styles.h4}> Europe </h4>
            {data.europe.map((el, index)=> (
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
            <h4 id="afrique" className={styles.h4}> Afrique </h4>
            {data.afrique.map((el, index)=> (
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