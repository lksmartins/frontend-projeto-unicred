import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Button from '../../components/Button'
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

  const router = useRouter()

  const [modalShow, setModalShow] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  function handleResponse(response) {
    setModalMessage('O código está correto, clique em avançar para ir para o próximo passo.')
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
          footer={ <Button onClick={()=>router.push('/parabens')}><i className="fas fa-chevron-circle-right"/> Avançar</Button> }
          >
          <p>
            { modalMessage }
          </p>
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
                  api_action="final_check"
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
