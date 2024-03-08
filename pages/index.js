import React from 'react'
import Category from '@/components/Category/Category'
import NasserVideo from '@/components/Media/NasserVideo';
import Form from '@/components/Form/Form'
import CookieMessage from '@/components/CookiesBanner/CookieMessage';

export default function Home() {
  return (
    <>      
      <NasserVideo />   
      <Category />
      <Form /> 
      <CookieMessage name="monCookie" value="cookieValue" days={30} />  
    </>
  )
}