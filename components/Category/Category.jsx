import React from 'react'
import Image from 'next/image'
import styles from './category.module.css'

export default function Category({picture}) {
  return (
    <div className={styles.banner}>
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