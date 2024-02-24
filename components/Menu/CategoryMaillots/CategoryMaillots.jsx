import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner1 from '@/assets/men-maillots.jpg'
import Banner2 from '@/assets/collection-homme.jpg'
import Banner3 from '@/assets/maillot-women2.jpg'
import Banner4 from '@/assets/kids.jpg'
import styles from './category.module.css'

export default function CategoryMaillots() {
  return (
    <section className={styles.container}>       
       <section className={styles.background}>       
            <h1 className={styles.h1}> Les Maillots </h1>
                <p className={styles.description}>                
                    Venez découvrir notre séléction de maillots authentiques. <br></br>
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
                <Link className={styles.btn} href="/mens/maillots"> Les maillots hommes </Link>           
                <Link className={styles.btn} href="/womens/maillots"> Les maillots femmes </Link>                       
                <Link className={styles.btn} href="/juniors/maillots"> Les maillots enfants</Link>          
        </div>
        <div id="maillotshommes" className={styles.category}>
            <Link href="/mens/maillots">
                <section className={styles.banner}>       
                    <h3 className={styles.h2}> Les Maillots Hommes </h3>
                    <p className={styles.description}> Livraison rapide. Paiement sécurisé. </p>
                    <Image 
                        src={Banner2}
                        fill
                        priority       
                        alt='banner'
                        className={styles.background}
                    />  
                </section>  
                <p className={styles.p} > Notre séléction de maillots pour Hommes. </p>
                <p className={styles.link}> Découvrir </p>
            </Link>         
        </div>
        <div id="maillotsfemmes" className={styles.category}>
            <Link href="/womens/maillots">
                <section className={styles.banner}>       
                    <h3  className={styles.h2}> Les Maillots Femmes</h3>
                    <p className={styles.description}> Livraison rapide. Paiement sécurisé. </p>
                    <Image 
                        src={Banner3}
                        fill
                        priority       
                        alt='banner'
                        className={styles.background}
                    />  
                </section>    
                <p className={styles.p}> Notre séléction de maillots pour femmes. </p>
                <p className={styles.link}> Découvrir </p>
            </Link>       
        </div>
        <div id="maillotsjuniors" className={styles.category}>
            <Link href="/juniors/maillots">
                <section className={styles.banner}>       
                    <h3 className={styles.h2}> Les Maillots Juniors </h3>
                    <p className={styles.description}> Livraison rapide. Paiement sécurisé. </p>
                    <Image 
                        src={Banner4}
                        fill
                        priority       
                        alt='banner'
                        className={styles.background}
                    />  
                </section>  
                <p className={styles.p}> Notre séléction de maillots pour Kids. </p>
                <p className={styles.link}> Découvrir </p>
            </Link>         
        </div>
    </section>
  )
}
