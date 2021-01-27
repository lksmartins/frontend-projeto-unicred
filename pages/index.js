import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Card from '../components/Card'
import Modal from '../components/Modal'
import Form from '../components/Form'

export default function Home() {

  const card = {
    ref: 'desafio_0',
    title: 'Desafio Inicial',
    description: 'Na mensagem no envelope de vocês há uma senha escondida, digite esta senha, que é uma PALAVRA, no campo abaixo. Este é o seu primeiro desafio.'
  }

  const [modalShow, setModalShow] = useState(false)
  const [modalMessage, setModalMessage] = useState('Mensagem padrão')

  return (
    <div className="container">
      <Head>
        <title>Projeto Unicred</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossOrigin="anonymous"/>
      </Head>

      <main className="main">

        <h1 className="title">
          Esquadrão <Link href="/desafios"><a>Unicred</a></Link>
        </h1>

        <p className="description">
           Bem-Vindo à seleção do Esquadrão UNICRED.
        </p>

        <div className="grid fill">
          <Card key={card.ref} card={card}>
            <Form id={card.ref} api_action="code_timer" modalSet={setModalShow} modalMessage={setModalMessage}/>
          </Card>
          <Modal 
              show={modalShow}
              onHide={()=>setModalShow(false)}
              title="Aviso s"
              >
              <p>Atenção integrantes da unidade de {modalMessage} ao clicar no botão de confirmar, o seu desafio irá começar.</p>
          </Modal>
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
