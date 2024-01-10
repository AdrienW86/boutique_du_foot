import React from 'react'
import Banner from '../Banner/Banner'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Link from 'next/link'
import Player from '@/assets/player.png'
import Player2 from '@/assets/player2.png'
import Player3 from '@/assets/player3.png'
import Banner4 from '@/assets/banner5.png'
import Banner5 from '@/assets/banner6.png'
import Banner6 from '@/assets/banner9.png'
import styles from '@/styles/Home.module.css'

export default function Accueil() {
  return (
    <section className={styles.home}>
      <Banner />      
        <Hero picture ={Player} title ='Les bons plans' /> 
          <Link href="/shop#anchor1">
            <Category picture ={Banner4}/> 
          </Link>  
          <Hero picture ={Player2} title ='Les populaires' /> 
            <Link href="/shop#anchor2">      
            <Category picture ={Banner5} /> 
          </Link>
          <Hero picture ={Player3} title ='Nouveautés' />  
          <Link href="/shop#anchor3">         
            <Category picture ={Banner6} />     
          </Link>
    </section>
  )
}