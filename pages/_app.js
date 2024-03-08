import Head from 'next/head'
import Header from '@/components/Header/Header'
import { MyContextProvider } from '@/utils/context';
import Footer from '@/components/Footer/Footer'
import BannerInstallation from '@/components/BannerInstallation/BannerInstallation'; // Import du composant de la bannière d'installation
import { useEffect } from 'react'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/sw.js")
       .then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    <> 
    <MyContextProvider>
    <Head>
        <title> Boutique du foot</title>
        <meta name="description" content="La boutique en ligne du football" />
        <meta name="viewport" content="width=device-width, initial-scale=1" /> 
        <link rel="icon" href="/favicon.ico" />     
      </Head>
    <Header />
    <BannerInstallation /> {/* Ajout de la bannière d'installation */}
    <Component  {...pageProps} />   
    <Footer />
    <SpeedInsights />
    <Analytics />
    </MyContextProvider>
  </>
  )
}
