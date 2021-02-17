import React,{ useEffect, useState } from 'react'
import Head from 'next/head'
import AudioPlayer  from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css'

import Modal from '../components/Modal'

export default function Parabens() {

  const [modalShow, setModalShow] = useState(true)

    useEffect(() => {

        window.addEventListener('click', ()=>{

            const audio = document.querySelector('.audio audio')

            audio.play()

        })

    })

  return (
    <div className="container" id="parabens">
      <Head>
        <title>Projeto Unicred</title>
      </Head>

      <main className="main">

        <Modal 
            show={modalShow}
            onHide={()=>setModalShow(false)}
            title="Parabéns!"
            >
            <p>Vocês completaram a missão com sucesso!</p>
        </Modal>

        <p className="description">
          Parabéns Esquadrão Unicred!
        </p>

        <div className="grid fill">

            <AudioPlayer 
                className="audio" 
                src="/queen.mp3"
                autoPlay
                loop
                volume={0.5}
            />

            <div className="col left">
                <img className="rounded" src="/imgs/trophy.gif" />
            </div>

            <div className="col right">
                <p>
                Vocês conseguiram conquistar o “Cooperado Mais Difícil do Mundo.”
                </p>
                <p>
                Através do jeito Eleva de ser, ao se IMPORTAR genuinamente em conquistar este cooperado, superando os desafios com ética, colaboração e aprendizado contínuo, vocês fizeram acontecer e provaram que juntos podem vencer e conquistar até mesmo o “Cooperado Mais Difícil do Mundo”.
                </p>
                <p>
                Ele ficou tão encantado com o trabalho de vocês, que irá lhes dar uma recompensa. Esta recompensa é individual e intransferível e para acessá-la você deve utilizar o cartão com sua senha pessoal. 
                </p>
                <p>
                Para acessar a sua recompensa individual acesse o link abaixo:
                </p>
                <h3>www.esquadraounicred.com.br/recompensa</h3>
            </div>

            
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
