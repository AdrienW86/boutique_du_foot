import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/assets/fail.png'
import styles from '@/styles/after-basket.module.css';

export default function cancel() {
  return (
  <>
    <div className={styles.container}>
      <div >    
        <section className={styles.banner}>       
          <h1 className={styles.h1}> Les shorts Hommes </h1>
            <p className={styles.description}>                
              Découvrez notre collection de shorts pour Hommes. Livraison rapide et gratuite à partir de 100€ d'achats.
            </p>
            <Image 
              src={Banner}
              fill
              priority       
              alt='banner'
              className={styles.background}
            />  
        </section>           
      </div>
      <h2 className={styles.h2}> Votre commande n'a pas été validée </h2>
      <p className={styles.warning}> Si le problème persisite, veuillez nous contacter à l'adresse email suivante:</p>
      <a className={styles.email} href='mailto:support@code-v.fr'> support@code-v.fr </a>
      <p className={styles.warning}> Si cet abandon est volontaire, nous vous invitons à reprendre votre visite et à valider votre panier ultérieurement.</p>
      <div className={styles.box}>
        <Link className={styles.home} href="/"> Retour à l'accueil </Link>
      </div>
    </div>
  </>
  )
}
