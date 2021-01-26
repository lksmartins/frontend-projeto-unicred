import Head from 'next/head'
import Link from 'next/link'

import cards from '../cards.json'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Projeto Unicred</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous"/>
      </Head>

      <main className="main">

        <h1 className="title">
          Projeto <Link href="/recompensa"><a>Unicred</a></Link>
        </h1>

        <p className="description">
          Alguma descrição exemplo
        </p>

        <div className="grid">
          {cards.map((card)=>
              <Card key={card.ref} card={card}/>
          )}
        </div>

      </main>

      <footer className="footer">
        <a
          href="https://chavemestra.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/logo/full_black.svg" alt="Chave-Mestra Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
