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
        <div className="container" id="pos-jogo">
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

            <img src="/logo/logo-escape-insta.svg" className="mt-60 rounded" alt="Chave-Mestra Logo" width="180" />

            <h1 className="mt-30">
                Parabéns!
            </h1>

            <div className="grid fill">

                <AudioPlayer 
                    className="audio" 
                    src="/queen.mp3"
                    autoPlay
                    loop
                    volume={0.5}
                />

                <div className="col">
                    <img className="rounded" src="/imgs/trophy.gif" />
                </div>
                
            </div>

        </main>
        
        </div>
    )
}
