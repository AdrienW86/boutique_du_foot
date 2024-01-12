import React, { useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/success.module.css';

export default function Success() {
  
  return (
   <>
    <div className={styles.container}>
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