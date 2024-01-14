import { Inter } from 'next/font/google'
import Accueil from '@/components/Accueil/Accueil'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
       <Accueil />
      </main>
    </>
  )
}
