import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './footer.module.css'

export default function Footer() {

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
   <footer className={styles.footer}>
      
      <div className={styles.social}>
        <Link href='https://www.snapchat.com/add/boutiquedufoot/QlNSdc84TSu6JI7Da5HkZAAAgdXlud3p5Y2tvAY290QS9AY290ECiAAAAAA?share_id=DXc0ltJnSGSlpzIqDzZL3A&locale=fr_FR'>
          <Image
            src='/snap.svg'
            width={50}
            height={50}
            priority
            className={styles.picture}
            alt='Snapchat logo'       
            />
        </Link>
      </div>
      <ul className={styles.ul}>
        <li> <Link href='/mentions' className={styles.li}> Mentions Légales </Link> </li>
        <li> <Link href='/conditions' className={styles.li}> Conditions Générales de vente </Link> </li>  
        <li> <Link href='https://code-v.fr' className={styles.li} > Réalisé par <span className={styles.span}> Codev </span> </Link>  </li>
      </ul>
      <p className={styles.copyright}> © Boutique du foot - {currentYear}</p>
   </footer>
  )
}