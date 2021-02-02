import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Parabens() {

  return (
    <div className="container">
      <Head>
        <title>Projeto Unicred</title>
      </Head>

      <main className="main">

        <p className="description">
            Parabéns, vocês agora fazem parte do Esquadrão Unicred.
        </p>

        <div className="grid fill">
            <p className="code">
                Imagem
            </p>
            <p>
                Agora vocês precisam coletar sua recompensa <b>individual</b>. Utilizem o cartão com a senha pessoal que receberam e acessem o link: 
            </p>
            <h3>
                <Link href="/recompensa"><a>www.esquadraounicred.com.br/recompensa</a></Link>
            </h3>
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
