import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'

export default function Hero({picture, title}) {
  return (
    <div className={styles.hero}>
    <Image 
      src={picture}
      width={80}
      height={80}
      alt='image title'
    />
    <h2 className={styles.h2}> {title} </h2>
  </div> 
  )
}