import React from 'react'
import Image from 'next/image'
import Ball from '@/assets/ball.png'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <section className={styles.title}>
            <h1 className={styles.h1}> La boutique du foot  </h1>
            <Image
                src={Ball}
                height={10}
                width={10}
                priority
                className={styles.logo}
                alt='ballon de foot'
             />
              <Image
                src={Ball}
                height={10}
                width={10}
                priority
                className={styles.logo2}
                alt='ballon de foot'
             />
        </section>
    </header>
  )
}
