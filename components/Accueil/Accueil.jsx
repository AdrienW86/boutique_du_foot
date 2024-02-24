import React from 'react'
import Category from '../Category/Category'
import NasserVideo from '@/components/Media/NasserVideo';
import Form from '@/components/Form/Form'
import styles from '@/styles/Home.module.css'

export default function Accueil() {
  return (
    <section className={styles.home}>
             
      <Category /> 
      <Form />
    </section>
  )
}