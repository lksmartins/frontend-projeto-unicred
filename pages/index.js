import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import Card from '../components/Card'
import Modal from '../components/Modal'
import Form from '../components/Form'
import Button from '../components/Button'

export default function Home() {

  const router = useRouter()

  const card = {
    ref: 'desafio_0',
    title: 'Desafio Inicial',
    description: 'Na mensagem no envelope de vocês há uma senha escondida, digite esta senha, que é uma PALAVRA, no campo abaixo. Este é o seu primeiro desafio.'
  }

  const [modalShow, setModalShow] = useState(false)
  const [modalMessage, setModalMessage] = useState('Mensagem padrão')
  const [unitCode, setUnitCode] = useState()

  return (
    <div className="container">
      <Head>
        <title>Projeto Unicred</title>
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
            <Form id={card.ref} api_action="code_timer" modalSet={setModalShow} modalMessage={setModalMessage} inputBack={setUnitCode}/>
          </Card>
          <Modal 
              show={modalShow}
              onHide={()=>setModalShow(false)}
              title="Muito bem!"
              footer={
                <>
                <Button className="button red left" onClick={()=>setModalShow(false)}><i className="fas fa-times-circle"/> Fechar</Button>
                <Button onClick={()=>router.push(`desafios/${unitCode.toUpperCase()}`)}><i className="fas fa-check-circle"/> Confirmar</Button>
                </>
              }
              >
              <p>Atenção integrantes da unidade <b>{modalMessage}</b>, ao clicar no botão <b>Confirmar</b>, o seu desafio irá começar!</p>
              <p>Quanto mais rápido vocês resolverem este desafio, mais vocês irão se destacar. A equipe que resolver estes desafios o mais rápido irá ganhar um prêmio.</p>
              <p>Se precisarem de ajuda em algum momento, podem mandar um Whatsapp para o número 51.981101419 para pedir uma dica, porém, cada dica irá descontar pontos de vocês na sua pontuação final.</p>
              <p>Boa sorte.</p>
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
