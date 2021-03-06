import React,{ useEffect, useState } from 'react'
import Head from 'next/head'
import AudioPlayer  from 'react-h5-audio-player'

import 'react-h5-audio-player/lib/styles.css'

import Modal from '../../components/Modal'

export default function Parabens() {

  const [modalShow, setModalShow] = useState(true)
  let played = false

    useEffect(() => {

        window.addEventListener('click', ()=>{

            const audio = document.querySelector('.audio audio')

            console.log(played)

            if( played === false ){
              audio.play()
              played = true
            }

        })

    }, [])

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
                <img className="rounded" src="/imgs/poster-unicred.webp" />
            </div>

            <div className="col right">
                <p>
                Através da colaboração e do espírito de equipe vocês conseguiram salvar a população de Green City e foram verdadeiros heróis. 
                </p>
                <p>
                Ao conquistar essa missão, vocês provaram que o resultado coletivo está acima do resultado individual.
                </p>
                <p>
                Continuem sendo protagonistas do seu desenvolvimento, buscando sempre a inovação e a excelência, pois JUNTOS podem vencer qualquer desafio!
                </p>
                <p>
                Pelo excelente trabalho irão receber uma mensagem especial! 
                <br/>
                Para acessar utilize a sua senha pessoal que foi enviada por e-mail no link abaixo:
                </p>
                <h3><a href="https://esquadraounicred.com.br/central/final">www.esquadraounicred.com.br/central/final</a></h3>
                <p>
                Saudações cooperativistas
                </p>
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
