import React from 'react'
import Category from '../Category/Category'
import Link from 'next/link'
import NasserVideo from '@/components/Media/NasserVideo';
import Banner4 from '@/assets/4.jpg'
import Banner5 from '@/assets/banner1.png'
import Banner6 from '@/assets/banner2.png'

import styles from '@/styles/Home.module.css'

export default function Accueil() {
  return (
    <section className={styles.home}>
       <NasserVideo />   
        <Link href="/shop#anchor3">         
          <Category picture ={Banner6} />     
        </Link>  
        <Link href="/shop#anchor2">      
          <Category picture ={Banner5} /> 
        </Link>        
       
    </section>
  )
}