import React from 'react'
import Image from 'next/image'
import styles from './category.module.css'

export default function Category({picture}) {
  return (
    <div className={styles.banner}>
      <button className={styles.btn}> Voir </button>
      <Image 
        src={picture}
        fill
        priority   
        className={styles.picture}    
        alt='banner'   
      />       
    </div>    
  )
}