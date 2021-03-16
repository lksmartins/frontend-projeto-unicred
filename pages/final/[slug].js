import React, { useState } from 'react'
import Head from 'next/head'

import Card from '../../components/Card'
import Form from '../../components/Form'
import Modal from '../../components/Modal'

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'CTS59vSL3W'} },
            { params: { slug: 'gs685T5mnr'} },
            { params: { slug: 'ZZRdDEH4Fn'} },
            { params: { slug: 'XAt4HlShCz'} },
            { params: { slug: 'iKB43JVb9k'} }
        ],
        fallback: false
    }
}

const codes = {
  "CTS59vSL3W":{color:'red', number:'42'},
  "gs685T5mnr":{color:'blue', number:'11'},
  "ZZRdDEH4Fn":{color:'black', number:'92'},
  "XAt4HlShCz":{color:'green', number:'08'},
  "iKB43JVb9k":{color:'yellow', number:'29'}
}

// senha final: 1142290892

export async function getStaticProps(context){

  const slug = context.params.slug
  const {color, number} = codes[slug]

	return {
		props: { 
            group:{
              slug: slug,
              color: color,
              number: number
            }
        }
	}
}

export default function Final(props) {

  const [modalShow, setModalShow] = useState(false)
  const [modalMessage, setModalMessage] = useState({cadastro:'', unidade:'', valor:'', salarios:''})
  const [messageType, setMessageType] = useState({colaboradores:'', estagiarios:''})

  function handleResponse(response) {

    response = JSON.parse(response)
    setModalMessage(response)

    const type = response.valor == '' ? {colaboradores:'hidden', estagiarios:''} : {colaboradores:'', estagiarios:'hidden'}

    setMessageType(type)
  }

  return (
    <div className="container" id="final">
      <Head>
        <title>Projeto Unicred</title>
      </Head>

      <main className="main">

        <Modal 
          show={modalShow}
          onHide={()=>setModalShow(false)}
          title="Parabéns!"
          >
          <div className={`colaboradores ${messageType.colaboradores}`}>
            <p className="text-center">
              Parabéns por essa conquista! Segue abaixo os valores referentes ao PPR do ano de 2020:
            </p>
            <p className="text-center mb-30">
              * Valor não tem dedução do imposto de renda
            </p>
            <p className="content">
              <span className="cadastro">Cadastro: <span>{modalMessage.cadastro}</span></span>
              <span className="unidade">Unidade: <span>{modalMessage.unidade}</span></span>
              <span className="valor">Valor: <span>{modalMessage.valor}</span></span>
              <span className="salarios">Salários: <span>{modalMessage.salarios}</span></span>
            </p>
          </div>

          <div className={`estagiarios ${messageType.estagiarios}`}>
            <p className="text-center">
              Caro aprendiz do esquadrão Unicred,
            </p>
            <p className="text-center">
              Estamos orgulhosos do seu aprendizado e comprometimento nesta jornada.
            </p>
            <p className="text-center">
              Para se tornar um membro do Esquadrão Unicred é necessário ter vontade de aprender, dedicação e paixão no que faz.
            </p>
            <p className="text-center">
              Acreditamos no seu potencial e esperamos que em breve possa ser um membro oficial do nosso esquadrão.
            </p>
          </div>
        </Modal>

        <div className="grid">
            <Card card={{'title':'Parabéns', 'description':'Vocês concluíram a primeira etapa desse desafio. Agora outro desafio os aguarda.', 'ref':'grupo_final'}}>
                
                <div className="circles">
                    <div className={`circle ${props.group.color}`}>{props.group.number}</div>
                </div>
                
                <div className="circles">
                    <div className="circle blue"></div>
                    <div className="circle red"></div>
                    <div className="circle yellow"></div>
                    <div className="circle green"></div>
                    <div className="circle black"></div>
                </div>

                <p className="mt-30">Digite a senha de todos grupos abaixo:</p>
                <Form 
                id="final"
                api_action="pass_check" 
                response={handleResponse}
                modalSet={setModalShow}
                />

                {
                /*
                outros grupos
                5 salas
                relacionar link de cada jogo com senha
                */

                }

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
