import React from 'react'
import Banner from '@/components/Banner/Banner'
import Background from '@/assets/kids.jpg'
import Banner1 from '@/assets/kids-survet.jpg'
import Banner2 from '@/assets/kids_maillot.jpg'
import Banner3 from '@/assets/kids-short.jpg'
import Banner4 from '@/assets/kid-accessoires.jpg'

export default function kids() {
  return (
    <>
        <Banner
          background={Background}
          banner1={Banner1}
          banner2={Banner2}
          banner3={Banner3}
          banner4={Banner4}
          title="COLLECTION JUNIORS"
          titleDescription= "Découvrez notre collection Juniors à travers nos différentes catégories. Livraison rapide et gratuite à partir de 100€ d'achats."
          description1="Découvrez notre collection de survêtements pour juniors."
          description2="Découvrez notre collection de maillots pour juniors."
          description3="Découvrez notre collection de shorts pour juniors."
          description4="Découvrez notre collection d'accessoires."
          url1="/juniors/sportswear"
          url2="/juniors/maillots"
          url3="/juniors/shorts"
          url4="/juniors/accessoires"
        />
    </>
  )
}
