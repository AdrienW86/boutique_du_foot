import React from 'react'
import Basket from '@/components/Basket/Basket'
import styles from '@/styles/Home.module.css'


export default function Card() {
  return (
    <main className={styles.main}>
      <div className={styles.basketContainer}>
        <Basket />
      </div> 
    </main>
  )
}
