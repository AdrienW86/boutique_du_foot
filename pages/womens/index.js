import React from 'react'
import Banner from '@/components/Banner/Banner'
import Background from '@/assets/women.jpg'
import Banner1 from '@/assets/survet-women.png'
import Banner2 from '@/assets/maillot-women2.jpg'
import Banner3 from '@/assets/women-short.jpg'
import Banner4 from '@/assets/women-accessoires.jpg'

export default function mens() {
  return (
    <>
        <Banner
          background={Background}
          banner1={Banner1}
          banner2={Banner2}
          banner3={Banner3}
          banner4={Banner4}
          title="COLLECTION FEMMES"
          titleDescription= "Découvrez notre collection Femmes à travers nos différentes catégories. Livraison rapide et gratuite à partir de 100€ d'achats."
          description1="Découvrez notre collection de survêtements pour femmes."
          description2="Découvrez notre collection de maillots pour femmes."
          description3="Découvrez notre collection de shorts pour femmes."
          description4="Découvrez notre collection d'accessoires."
          url1="/womens/sportswear"
          url2="/womens/maillots"
          url3="/womens/shorts"
          url4="/womens/accessoires"
        />
    </>
  )
}