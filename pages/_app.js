import Head from 'next/head'
import Header from '@/components/Header/Header'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <> 
    <Head>
        <title>La boutique du foot</title>
        <meta name="description" content="La boutique en ligne du football" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />       
        <link rel="icon" href="/favicon.ico" />     
      </Head>
    <Header />
    <Nav />
    <Component  {...pageProps} />   
    <Footer />
    <SpeedInsights />
    <Analytics />
  </>
  )
}
