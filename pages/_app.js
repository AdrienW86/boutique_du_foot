import '@/styles/globals.css'
import Header from '@/components/Header/Header'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

export default function App({ Component, pageProps }) {
  return (
    <> 
    <Header />
    <Nav />
   
    <Component  {...pageProps} />
    <Footer />
  </>
  )
}
