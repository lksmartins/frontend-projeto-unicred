import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ReactPlayer from 'react-player'

import Card from '../components/Card'
import Modal from '../components/Modal'
import Form from '../components/Form'
import Button from '../components/Button'
import TimerButton from '../components/TimerButton'

export default function Home() {

  const router = useRouter()

  const card = {
    ref: 'desafio_0',
    title: 'Bem-vindo Esquadrão Unicred',
    description: 'Assista ao video abaixo para conhecer sua missão. Em seguida, resolva seu primeiro desafio: Verifiquem no envelope de vocês e encontrem uma senha escondida, digite esta senha, que é uma PALAVRA, no campo abaixo.'
  }

  const [modalShow, setModalShow] = useState(false)
  const [modalMessage, setModalMessage] = useState('Mensagem padrão')
  const [unitCode, setUnitCode] = useState()
  const [timerStart, setTimerStart] = useState(false)

  return (
    <div className="container">
      <Head>
        <title>Projeto Unicred</title>
      </Head>

      <main className="main">

        <div className="grid fill">
          <Card key={card.ref} card={card}>
            <ReactPlayer onClick={()=>{setTimerStart(true)}}
                id="video_player"
                className="video" 
                url="https://www.youtube.com/watch?v=T2_yFfCurfA"
                loop={false}
                playing={true}
                muted={false}
                light={true}
                onPause={()=>{console.log("onPause")}}
                onPlay={()=>{console.log("onPlay")}}
                width={880}
                height={495}
            />
            <Form 
            id={card.ref} 
            api_action="code_timer" 
            modalSet={setModalShow} 
            modalMessage={setModalMessage} 
            inputBack={setUnitCode}
            timerbutton={{ time:146, start:timerStart }}
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

              <p>Outras equipes do Esquadrão UNICRED também estão fazendo esta atividade, e a equipe que conseguir resolver tudo em menos tempo receberá um prêmio. Portanto, sejam rápidos para vencer.</p>
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
