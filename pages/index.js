import React from 'react'
import Category from '@/components/Category/Category'
import NasserVideo from '@/components/Media/NasserVideo';
import Form from '@/components/Form/Form'

export default function Home() {
  return (
    <>      
      <NasserVideo />   
      <Category />
      <Form />      
    </>
  )
}