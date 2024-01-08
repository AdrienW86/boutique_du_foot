import React from 'react'
import Image from 'next/image'
import styles from './category.module.css'

export default function Category({picture}) {
  return (
    <div className={styles.banner}>
        <Image 
            src={picture}
            width={150}
            height={150}
            layout = 'responsive'
            priority       
            alt='banner'   
        /> 
  </div>    
  )
}