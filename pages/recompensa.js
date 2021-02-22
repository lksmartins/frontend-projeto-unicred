import React, { useState } from 'react'
import Head from 'next/head'

import Card from '../components/Card'
import Form from '../components/Form'
import Modal from '../components/Modal'

export default function Recompensa() {

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
    <div className="container" id="recompensa">
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
            <Card card={{'title':'Recompensa', 'description':'Digite sua senha abaixo:', 'ref':'recompensa'}}>
              <Form 
                id="recompensa"
                api_action="pass_check" 
                response={handleResponse}
                modalSet={setModalShow}
              />
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
