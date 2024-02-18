import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Coffret from '@/components/Coffret/Coffret';
import Card from '@/components/Card/Card'
import CardKid from '@/components/CardKid/CardKid';
import Tiger from '@/components/Tiger/Tiger';
import Socket from '@/components/Socket/Socket'
import Packs from '@/components/Pack/Pack';
import FarahVideo from '@/components/Media/FarahVideo';
import { data } from '@/data'
import styles from '@/styles/Home.module.css'
import Arrow from '@/assets/arrow.png'

export default function boutique() {

  const [selectedSection, setSelectedSection] = useState('');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
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
       <FarahVideo />    
      <h2 className={styles.shopTitle}> La boutique </h2>
      <label className={styles.label} htmlFor="sectionDropdown">Choisissez une catégorie :</label>
        <div className={styles.team}>       
          <select className={styles.select} id="sectionDropdown" value={selectedSection} onChange={handleDropdownChange}>
            <option value="">-- Sélectionnez une catégorie --</option>
            <option value="coffrets">Les coffrets </option>
            <option value="packs">Les packs </option>
            <option value="equipement">Les chaussettes </option>
            <option value="pharmacie">Les baumes</option>
            <option value="maillots">Les maillots</option>
            <option value="juniors">Les maillots juniors</option>
          </select>  
        </div>
        <div id="coffrets" className={styles.hero}>     
          <h2 className={styles.h2}> Les coffrets <span id="anchor1" className={styles.anchor}></span></h2>
        </div>
          <div className={styles.container}>  
          <span id="mahiedine" className={styles.anchor}></span>
            <Coffret 
              id={data.vip[0].id}
              name={data.vip[0].name}
              recto={data.vip[0].recto}
              verso={data.vip[0].verso}
              price={data.vip[0].price}
              link={data.vip[0].link}
              sizes={data.vip[0].sizes} 
              description={data.vip[0].description}
              selectedSize={selectedSize}
              onSizeChange={(size) => setSelectedSize(size)}
            /> 
          
            <Coffret 
              id={data.vip[1].id}
              name={data.vip[1].name}
              recto={data.vip[1].recto}
              verso={data.vip[1].verso}
              price={data.vip[1].price}
              link={data.vip[1].link}
              sizes={data.vip[1].sizes} 
              description={data.vip[1].description}
              selectedSize={selectedSize}
              onSizeChange={(size) => setSelectedSize(size)}
            /> 
         <span id="nasser" className={styles.anchor}></span>
            <Coffret 
              id={data.vip[2].id}
              name={data.vip[2].name}
              recto={data.vip[2].recto}
              verso={data.vip[2].verso}
              price={data.vip[2].price}
              link={data.vip[2].link}
              sizes={data.vip[2].sizes} 
              description={data.vip[2].description}
              selectedSize={selectedSize}
              onSizeChange={(size) => setSelectedSize(size)}
            /> 
             <span id="farah" className={styles.anchor}></span>
            {data.coffrets.map((el, index)=> (
              <Coffret 
                key={index}
                id={el.id}
                name={el.name}
                recto={el.recto}
                verso={el.verso}
                price={el.price}
                link={el.link}
                sizes={el.sizes} 
                description={el.description}
                selectedSize={selectedSize}
                onSizeChange={(size) => setSelectedSize(size)}
              /> 
            ))}              
          </div>  
          <div id="packs" className={styles.hero}>     
          <h2 className={styles.h2}> Les packs <span id="anchor2" className={styles.anchor}></span></h2>
        </div>
          <div className={styles.container}>       
              {data.packs.map((el, index)=> (
                <Packs 
                key={index}
                id={el.id}
                name={el.name}
                recto={el.recto}
                price={el.price}
                description={el.description}
                /> 
              ))}              
          </div>  
          <div id="pharmacie" className={styles.hero}>     
          <h2 className={styles.h2}> Les baumes <span id="anchor3" className={styles.anchor}></span></h2>
        </div>
        <div className={styles.container}>
          {data.baumes.map((el, index)=> (
            <Tiger 
              key={index}
              id={el.id}
              name={el.name}
              recto={el.recto}
              verso={el.verso}
              price={el.price}
              description={el.description}
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
        <div id="maillots" className={styles.hero}>         
          <h2 className={styles.h2}> Les maillots </h2>           
        </div>       
        <div className={styles.container}>       
            {data.maillots.map((el, index)=> (
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
        <div id="juniors" className={styles.hero}>         
          <h2 className={styles.h2}> Les maillots juniors </h2>           
        </div>       
        <div className={styles.container}>       
            {data.juniors.map((el, index)=> (
              <CardKid 
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