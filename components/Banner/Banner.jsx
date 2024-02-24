import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CategoryCarousel from '@/components/CategoryCarousel/CategoryCarousel'
import styles from './banner.module.css'

export default function Banner(props) {
  return (
    <div className={styles.container}>
        
            <section className={styles.banner}>       
            <h1 className={styles.h1}> {props.title} </h1>
                <p className={styles.description}>                
                    {props.titleDescription}
                </p>
            <Image 
                src={props.background}
                fill
                priority       
                alt='banner'
                className={styles.background}
            />  
            </section>           
        
        <CategoryCarousel 
            sportswear = {props.url1}
            maillots = {props.url2}
            shorts = {props.url3}
            accessoires = {props.url4}
        />
        <div className={styles.category}>
            <section className={styles.banner}>         
            <Image 
                src={props.banner1}
                fill
                priority       
                alt='banner'
            />  
            </section>
            <h2 className={styles.h2}> LES SURVETEMENTS </h2>
            <p className={styles.p}> {props.description1}</p>
            <Link href={props.url1} className={styles.link}> Voir la collection </Link>
        </div>
        <div className={styles.category}>
            <section className={styles.banner}>         
            <Image 
                src={props.banner2}
                fill
                priority       
                alt='banner'
            />  
            </section>
            <h2 className={styles.h2}> LES MAILLOTS </h2>
            <p className={styles.p}> {props.description2}</p>
            <Link href={props.url2} className={styles.link}> Voir la collection </Link>
        </div>
        {/* <div className={styles.category}>
            <section className={styles.banner}>         
            <Image 
                src={props.banner3}
                fill
                priority       
                alt='banner'
            />  
            </section>
            <h2 className={styles.h2}> LES SHORTS </h2>
            <p className={styles.p}> {props.description3}</p>
            <Link href={props.url3} className={styles.link}> Voir la collection </Link>
        </div> */}
        <div className={styles.category}>
            <section className={styles.banner}>         
            <Image 
                src={props.banner4}
                fill
                priority       
                alt='banner'
            />  
            </section>
            <h2 className={styles.h2}> LES ACCESSOIRES </h2>
            <p className={styles.p}> {props.description4}</p>
            <Link href={props.url4} className={styles.link}> Voir la collection </Link>
        </div>      
    </div>
  )
}