import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Button from '../../../components/Button'
import Card from '../../../components/Card'
import Form from '../../../components/Form'
import Modal from '../../../components/Modal'

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'c531e0e5'} },
            { params: { slug: 'b236d073'} },
            { params: { slug: '2b3f81c9'} },
            { params: { slug: '5c38b15f'} }
        ],
        fallback: false
    }
}

const codes = {
  "c531e0e5":{color:'red', number:'42'},
  "b236d073":{color:'blue', number:'11'},
  "2b3f81c9":{color:'black', number:'92'},
  "5c38b15f":{color:'yellow', number:'08'}
}

// senha final: 11420892

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

  const hash = props.group.slug

  const router = useRouter()
  
  const [check, setCheck] = useState(0)

  // to verify if all groups are done with their challenges
  async function callApi(){

      const res = await fetch('https://escapelive.chavemestra.net/site/actions.php', {
          method: 'POST',
          body: JSON.stringify({ 
              action: 'agibankGroupsDone'
          })
      })

      const response = await res.json()

      console.log(response)

      if( response.status == 200 ){
        setModalMessage('O código final foi inserido com sucesso. Clique em Avançar para ir para o próximo passo.')
        setShowBtn(true)
        setModalShow(true)
      }

  }

  useEffect(() => {
    const id = setInterval(() => {
        callApi()
        setCheck( check+1 )
    }, 10000);
    return () => clearInterval(id);
  }, [check])

  const [modalShow, setModalShow] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  return (
    <div className="container" id="agibank">
      <Head>
        <title>Agibank - Escape Live</title>
      </Head>

      <main className="main">

        <Modal 
          show={modalShow}
          onHide={()=>setModalShow(false)}
          title="Aviso"
          footer={ <a href={`https://escapelive.chavemestra.net/agibank/final/${hash}`} className={ showBtn == true ? 'button agibank show' : 'button agibank hidden' }><i className="fas fa-chevron-circle-right"/> Avançar</a> }
          >
          <p>
            { modalMessage }
          </p>
        </Modal>

        <img src="/imgs/logos/agibank.png" className="mt-60 rounded" alt="Agibank Logo" width="180" />

        <div className="grid">
            <Card card={{
              'title':'Primeira etapa concluída', 
              'description':'', 
              'ref':'grupo_final'}}>
              <p>
              Vocês concluíram a primeira etapa do desafio. Para concluir essa missão, é necessário que todos os grupos concluam seu respectivo desafio e vocês serão redirecionados a página principal. Aguardem.
              </p>
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
