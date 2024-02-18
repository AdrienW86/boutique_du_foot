import React from 'react'
import Category from '../Category/Category'
import Link from 'next/link'
import Media from '@/components/Media/Media'
import Banner4 from '@/assets/4.jpg'
import Banner5 from '@/assets/5.jpg'
import Banner6 from '@/assets/6.jpg'
import Nasser from '@/assets/nasser.mp4'
import styles from '@/styles/Home.module.css'

export default function Accueil() {
  return (
    <section className={styles.home}>
     <Media 
      content= {Nasser}
      anchor= "/shop#nasser"
    />    
        <Link href="/shop#anchor1">
          <Category picture ={Banner4}/> 
        </Link>          
        <Link href="/shop#anchor2">      
          <Category picture ={Banner5} /> 
        </Link>        
        <Link href="/shop#anchor3">         
          <Category picture ={Banner6} />     
        </Link>
    </section>
  )
}