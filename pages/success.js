import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import Banner from '@/assets/succes.jpg'
import styles from '@/styles/after-basket.module.css';

export default function Success() {
  
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
      <h2 className={styles.h2}>Votre commande a bien été enregistrée</h2>
      <p className={styles.warning}>Vous recevrez prochainement un email avec votre facture et la date estimée de votre livraison.</p>
      <p className={styles.warning}>Nous vous remercions d'avoir effectué vos achats chez nous et espérons que vos produits vous donneront entière satisfaction.</p>
      <p className={styles.warning}>Vous pouvez retourner à l'accueil pour continuer votre visite sur notre site ou effectuer d'autres achats.</p>
      <div className={styles.box}>
        <Link className={styles.home} href="/">Retour à l'accueil</Link>
      </div>
    </div>
   </>
  );
}