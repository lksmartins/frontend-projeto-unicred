import React,{ useEffect, useState } from 'react'
import Head from 'next/head'

export default function GameOver() {

    return (
        <div className="container" id="agibank">
        <Head>
            <title>Agibank - Escape Live</title>
        </Head>

        <main className="main">

            <img src="/logo/logo-escape-insta.svg" className="mt-60 rounded" alt="Chave-Mestra Logo" width="180" />

            <h1 className="mt-30">
                Não foi dessa vez!
            </h1>

            <div className="grid fill">

                <div className="col mt-30 mb-30 text-center">
                    <h3>
                    Você não concluiu o jogo, mas isso não significa que não houveram aprendizados. Essa experiência não é sobre escapar, mas sim sobre aprender algo novo. Reflita sobre essa experiência e logo mais converse com seus colegas.
                    </h3>
                </div>
                
            </div>

        </main>
        
        </div>
    )
}
