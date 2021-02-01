import Head from 'next/head'
import Link from 'next/link'

export default function DesafioConcluido() {

  return (
    <div className="container">
      <Head>
        <title>Projeto Unicred</title>
      </Head>

      <main className="main">

        <h1 className="title">
          Esquadrão <Link href="/"><a>Unicred</a></Link>
        </h1>

        <p className="description">
          O desafio dessa unidade já foi concluído.
        </p>

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
