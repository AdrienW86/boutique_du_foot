import React, { useState } from 'react';
import Image from 'next/image'
import Card from '@/components/Card/Card'
import Socket from '@/components/Socket/Socket'
import { data } from '@/data'
import styles from '@/styles/Home.module.css'
import Banner2 from '@/assets/shopBanner.png'

export default function boutique() {

  const [selectedSection, setSelectedSection] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDropdownChange = (event) => {
    setSelectedSection(event.target.value);
    const element = document.getElementById(event.target.value);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleShowImage = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowImageModal(true);
  };

  const handleCloseImageModal = () => {
    setSelectedImage(null);
    setShowImageModal(false);
  };


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
            <option value="">-- Sélectionnez une section --</option>
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
              link={el.link}
            /> 
          ))}   
        </div>       
    </section>
  )
}