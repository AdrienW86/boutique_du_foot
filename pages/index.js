import { Inter } from 'next/font/google'
import React from 'react'
import Category from '@/components/Category/Category'
import NasserVideo from '@/components/Media/NasserVideo';
import Form from '@/components/Form/Form'
import Accueil from '@/components/Accueil/Accueil'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
       
       <NasserVideo />   

      <Category /> 
      <Form />
      
    </>
  )
}
