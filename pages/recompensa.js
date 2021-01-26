import Head from 'next/head'
import Card from '../components/Card'
import Link from 'next/link'

export default function Recompensa() {
  
  const action = 'pass_check'

  return (
    <div className="container" id="recompensa">
      <Head>
        <title>Projeto Unicred</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous"/>
      </Head>

      <main className="main">

        <h1 className="title">
          Projeto <Link href="/"><a>Unicred</a></Link>
        </h1>

        <p className="description">
          Recompensa
        </p>

        <div className="grid">
            <Card api_action={action} card={{'title':'Título Exemplo', 'description':'Descrição Exemplo', 'ref':'recompensa'}}/>
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
