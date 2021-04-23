import Head from 'next/head'
import { useRouter } from 'next/router'

import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const header = router.pathname == '/v2/pos-jogo' || '/agibank/final/[slug]' ? null : <Header />

  console.log(router.pathname)

  return (<div>
    <Head>
      <link rel="icon" href="/favicon.ico" />

			<link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous"/>
		</Head>
    { header }
    <Component {...pageProps} />
  </div>)
}

export default MyApp
