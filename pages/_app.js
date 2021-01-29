import Head from 'next/head'
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel="icon" href="/favicon.ico" />

			<link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous"/>
		</Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
