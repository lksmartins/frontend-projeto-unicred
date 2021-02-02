import Head from 'next/head'

import Card from '../components/Card'
import Form from '../components/Form'

export default function Recompensa() {

  return (
    <div className="container" id="recompensa">
      <Head>
        <title>Projeto Unicred</title>
      </Head>

      <main className="main">

        <p className="description">
          Recompensa
        </p>

        <div className="grid">
            <Card card={{'title':'Título Exemplo', 'description':'Descrição Exemplo', 'ref':'recompensa'}}>
              <Form id="recompensa" api_action="pass_check" />
            </Card>
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
