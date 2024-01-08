import React from 'react'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
  return (
   <footer className={styles.footer}>
        <ul className={styles.ul}>
            <li className={styles.li}> <Link href='/mentions'> Mentions Légales </Link> </li>
            <li className={styles.li}> <Link href='/conditions'> Conditions Générales de vente </Link> </li>  
            <li className={styles.li}> <Link href='https://code-v.fr '> Réalisé par <span className={styles.span}> Codev </span> </Link>  </li>
        </ul>
   </footer>
  )
}