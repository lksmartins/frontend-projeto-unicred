import React, { useState } from 'react'
import Head from 'next/head'

import Card from '../../../components/Card'
import Form from '../../../components/Form'
import Modal from '../../../components/Modal'

export default function Recompensa() {

  const [modalShow, setModalShow] = useState(false)
  const [modalMessage, setModalMessage] = useState({cadastro:'', valor:'', salarios:''})
  const [messageType, setMessageType] = useState({colaboradores:'', estagiarios:''})

  function handleResponse(response) {

    console.log('handleResponse', response)

    setModalMessage(response)

    const type = response.valor == '0' ? {colaboradores:'hidden', estagiarios:''} : {colaboradores:'', estagiarios:'hidden'}

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
            Parabéns pela sua dedicação e empenho em conquistar os objetivos de 2020. Contamos com você para construirmos juntos o resultado de 2021!
            </p>
            <p className="content central">
              <span className="cadastro">Cadastro: <span>{modalMessage.cadastro}</span></span>
              <span className="valor">Valor: <span>{modalMessage.valor}</span></span>
              <span className="salarios">Salários: <span>{modalMessage.salarios}</span></span>
            </p>
            <p className="text-center mb-30">
              * Valor não tem dedução do imposto de renda
            </p>
          </div>

          <div className={`estagiarios ${messageType.estagiarios}`}>
            <p className="text-center">
              Parabéns Esquadrão Unicred 
            </p>
            <p className="text-center">
            Estamos orgulhosos do seu aprendizado e comprometimento nesta jornada, e por fazer parte do Esquadrão Unicred 2021!
            </p>
            <p className="text-center">
            Você já é um membro através da sua cooperação, foco na excelência ,no desenvolvimento contínuo, de forma a gerar cada vez mais conexão com nossas cooperativas vamos ainda além!
            </p>
            <p className="text-center">
            Acreditamos no seu potencial e vamos juntos construir os resultado para 2021.
            </p>
          </div>
				</Modal>

        <div className="grid">
            <Card card={{'title':'Esquadrão Unicred', 'description':'Digite sua senha abaixo:', 'ref':'recompensa'}}>
              <Form 
                id="recompensa"
                api_action="central_senhas" 
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
