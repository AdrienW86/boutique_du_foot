import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner1 from '@/assets/banner-socket.jpg'
import Banner2 from '@/assets/tapedesign.jpg'
import Banner3 from '@/assets/bf-sockets.png'

import PaymentBanner from '../PaymentBanner/PaymentBanner'
import styles from './category.module.css'

export default function CategoryMaillots() {
  return (
    <section className={styles.container}>       
       <section className={styles.background}>       
            <h1 className={styles.h1}> Les Chaussettes </h1>
                <p className={styles.description}>                
                    Venez découvrir notre collection de Chaussettes. <br></br>
                    Paiement sécurisé et livraison gratuite à partir de 100 €
                </p>
            <Image 
                src={Banner1}
                fill
                priority       
                alt='banner'
                className={styles.background}
            />  
        </section>             
        <div className={styles.box}>  
            <h2 className={styles.h3}> Nos différentes collections </h2>    
                <Link className={styles.btn} href="/sockets/tapedesign"> Tapedesign </Link>
                <Link className={styles.btn} href="/sockets/bf"> Boutique du foot </Link>                                                                           
        </div>
        <div id="maillotshommes" className={styles.category}>
            <Link  href="/sockets/tapedesign">
                <section className={styles.banner}>       
                    <h3 className={styles.h2}> COLLECTION TAPEDESIGN </h3>
                    <p className={styles.description}> Livraison rapide. Paiement sécurisé. </p>
                    <Image 
                        src={Banner2}
                        fill
                        priority       
                        alt='banner'
                        className={styles.background}
                    />  
                </section>  
                <p className={styles.p} > Notre collection de chaussettes. </p>
                <p className={styles.link}> Découvrir </p>
            </Link>         
        </div>
        <div id="maillotsfemmes" className={styles.category}>
            <Link href="/sockets/bf">
                <section className={styles.banner}>       
                    <h3  className={styles.h2}> COLLECTION BF</h3>
                    <p className={styles.description}> Livraison rapide. Paiement sécurisé. </p>
                    <Image 
                        src={Banner3}
                        fill
                        priority       
                        alt='banner'
                        className={styles.background}
                    />  
                </section>    
                <p className={styles.p}> Notre collection de chaussettes. </p>
                <p className={styles.link}> Découvrir </p>
            </Link>       
        </div>
        <PaymentBanner />
    </section>
  )
}
