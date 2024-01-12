import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer/Footer'
import styles from '@/styles/cancel.module.css'

export default function cancel() {
  return (
  <>
    <div className={styles.container}>
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
