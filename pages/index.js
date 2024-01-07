import Head from 'next/head'
import { Inter } from 'next/font/google'
import Accueil from '@/components/Accueil/Accueil'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="La boutique en ligne du football" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />       
        <link rel="icon" href="/favicon.ico" />     
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
       <Accueil />
      </main>
    </>
  )
}
