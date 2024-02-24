import React from 'react';
import Image from 'next/image';
import styles from './card.module.css';

export default function Card(props) {
  const navigation = () => {
    console.log(props.name)
  }
  console.log(props.name)
  return (
  <div className={styles.card} >        
    <section className={styles.banner}>       
      <Image 
        src={props.recto}
        fill
        sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 1000px"     
        alt='Product image'
        onClick={navigation}
        className={styles.background}
      />  
    </section>  
    <h3 className={styles.h3}> {props.name} </h3> 
      <p className={styles.description}> Maillot officiel pour femme de l'équipe {props.name} </p> 
      <p className={styles.price}>
        {props.price} €
      </p>                       
  </div>   
  );
}