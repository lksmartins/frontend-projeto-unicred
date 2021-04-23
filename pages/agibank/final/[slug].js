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

  const router = useRouter()
  
  const [check, setCheck] = useState(0)

  async function callApi(){

      const res = await fetch('https://escapelive.chavemestra.net/site/actions.php', {
          method: 'POST',
          body: JSON.stringify({ 
              action: 'agibankFinalCode'
          })
      })

      const response = await res.json()

      console.log(response)

      if( response.status == 200 ){
        setModalMessage('O código final foi inserido com sucesso. Clique em Avançar para ir para o próximo passo.')
        setModalShow(true)
      }

  }

  async function finalCheck(e){

    e.preventDefault()

    console.log('finalCheck', e.target[0].value)

    const code = e.target[0].value

    const res = await fetch('https://escapelive.chavemestra.net/site/actions.php', {
        method: 'POST',
        body: JSON.stringify({ 
            action: 'agibankFinalCodeCheck',
            code: code
        })
    })

    const response = await res.json()

    console.log(response)

    if( response.status == 200 ){
      setModalMessage('O código final foi inserido com sucesso. Clique em Avançar para ir para o próximo passo.')
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
  const [modalMessage, setModalMessage] = useState('')

  function handleResponse(response) {
    setModalMessage('O código está correto, clique em avançar para ir para o próximo passo.')
  }

  return (
    <div className="container" id="agibank">
      <Head>
        <title>Agibank - Escape Live</title>
      </Head>

      <main className="main">

        <Modal 
          show={modalShow}
          onHide={()=>setModalShow(false)}
          title="Parabéns!"
          footer={ <Button onClick={()=>router.push('/v2/pos-jogo')}><i className="fas fa-chevron-circle-right"/> Avançar</Button> }
          >
          <p>
            { modalMessage }
          </p>
        </Modal>

        <img src="/imgs/logos/agibank.png" className="mt-60 rounded" alt="Agibank Logo" width="180" />

        <div className="grid">
            <Card card={{
              'title':'Primeira etapa concluída', 
              'description':'Vocês concluíram a primeira etapa do desafio. Para concluir essa missão, é necessário que todos os grupos concluam seu desafio, pois cada um receberá uma parte da senha final. Aguarde ser redirecionado para a sala principal no teams para se comunicar com os outros grupos e assim conseguirem inserir a senha final juntos.', 
              'ref':'grupo_final'}}>
                
                <div className="circles">
                    <div className={`circle ${props.group.color}`}>{props.group.number}</div>
                </div>
                
                <div className="circles">
                    <div className="circle blue"></div>
                    <div className="circle red"></div>
                    <div className="circle yellow"></div>
                    <div className="circle black"></div>
                </div>

                <p className="mt-30">Digite a senha de todos grupos abaixo:</p>
                <Form 
                  id="final"
                  onSubmit={finalCheck}
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
