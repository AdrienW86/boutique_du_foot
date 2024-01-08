import React from 'react'
import Image from 'next/image'
import Title from '@/assets/title.png'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
        <section className={styles.title}>
            
            <Image
                src={Title}
                height={100}
                width={350}
                priority
                className={styles.logo}
                alt='ballon de foot'
             />
              
        </section>
    </header>
  )
}
