import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

import Card from '../components/Card'
import Modal from '../components/Modal'
import Form from '../components/Form'
import Button from '../components/Button'
import TimerButton from '../components/TimerButton'

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
  const [timerStart, setTimerStart] = useState(false)

  useEffect(() => {
    console.log('timerStart')
    console.log(timerStart)
  })

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
           Bem-Vindo à seleção do Esquadrão UNICRED.
        </p>

        <div className="grid fill">
          <Card key={card.ref} card={card}>
            <p className="code" onClick={()=>{setTimerStart(true)}}>
                Video
            </p>
            <Form 
            id={card.ref} 
            api_action="code_timer" 
            modalSet={setModalShow} 
            modalMessage={setModalMessage} 
            inputBack={setUnitCode}
            timerbutton={{ time:10, start:timerStart }}
            />
          </Card>
          <Modal 
              show={modalShow}
              onHide={()=>setModalShow(false)}
              title="Muito bem!"
              footer={
                <>
                <Button className="button red left" onClick={()=>setModalShow(false)}><i className="fas fa-times-circle"/> Fechar</Button>
                <TimerButton onClick={()=>router.push(`desafios/${unitCode.toUpperCase()}`)} time={10} start={modalShow}><i className="fas fa-check-circle"/> Confirmar</TimerButton>
                </>
              }
              >
              <p>Atenção integrantes da unidade <b>{modalMessage}</b>, ao clicar no botão <b>Confirmar</b>, o seu desafio irá começar!</p>

              <p>Ao clicar em continuar vocês irão começar o seu desafio. Outras equipes do Esquadrão UNICRED também estão fazendo esta atividade, e a equipe que conseguir resolver tudo em menos tempo receberá um prêmio. Portanto, sejam rápidos para vencer.</p>
              <p>Durante o desafio vocês podem pedir dicas mandando um Whats para o telefone que passamos para vocês na carta. Cada dica solicitada irá aumentar em 5min o tempo final de vocês.</p>

              <p>Boa sorte e bom jogo.</p>
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
