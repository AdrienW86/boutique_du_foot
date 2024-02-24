import React from 'react'
import Banner from '@/components/Banner/Banner'
import Background from '@/assets/men-banner.jpg'
import Banner1 from '@/assets/survet.jpg'
import Banner2 from '@/assets/men-maillots.jpg'
import Banner3 from '@/assets/short.jpg'
import Banner4 from '@/assets/accessoires.jpg'

export default function mens() {
  return (
    <>
        <Banner
          background={Background}
          banner1={Banner1}
          banner2={Banner2}
          banner3={Banner3}
          banner4={Banner4}
          title="COLLECTION HOMMES"
          titleDescription= "Découvrez notre collection Hommes à travers nos différentes catégories. Livraison rapide et gratuite à partir de 100€ d'achats."
          description1="Découvrez notre collection de survêtements pour hommes."
          description2="Découvrez notre collection de maillots pour hommes."
          description3="Découvrez notre collection de shorts pour hommes."
          description4="Découvrez notre collection d'accessoires."
          url1="/mens/sportswear"
          url2="/mens/maillots"
          url3="/mens/shorts"
          url4="/mens/accessoires"
        />
    </>
  )
}