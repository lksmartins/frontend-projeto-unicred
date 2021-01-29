import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Card from '../../components/Card'
import Timer from '../../components/Timer'
import Form from '../../components/Form'

export default function Desafio() {

	const router = useRouter()
	const { unit } = router.query

	const desafio1 = {field1:"", field2:"", field3:""}
	const [stateDesafio1, setDesafio1] = useState(desafio1)

	const desafio2 = {field1:"", field2:"", field3:""}
	const [stateDesafio2, setDesafio2] = useState(desafio2)

	const desafio3 = {field1:"", field2:"0", field3:"", field4:"0", field5:"", field6:"0", field7:"", field8:"0"}
	const [stateDesafio3, setDesafio3] = useState(desafio3)

	function handleInputChange(e) {

		const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name
		const desafio = target.attributes.desafio.value

		let fState = {};

		if( desafio == 1 ){
			fState = {...stateDesafio1}
		}
		if( desafio == 2 ){
			fState = {...stateDesafio2}
		}
		if( desafio == 3 ){
			fState = {...stateDesafio3}
		}

		fState[name] = value

		if( desafio == 1 ){
			setDesafio1(fState)
		}
		if( desafio == 2 ){
			setDesafio2(fState)
		}
		if( desafio == 3 ){
			setDesafio3(fState)
		}
		
    }

	return (
		<div className="container">
		<Head>
			<title>Projeto Unicred - Desafios</title>
		</Head>

		<main className="main">

			<Timer unit={unit} />

			<h1 className="title">
			Esquadrão <Link href="/"><a>Unicred</a></Link>
			</h1>

			<p className="description">
			Desafios - {unit}
			</p>

			<div className="grid">

				<Card card={ {"title": "Desafio 1 - Labirinto", "description": "3 CAMINHOS ao centro vocês devem buscar. Em cada um, uma PALAVRA irá se formar. Se forem espertos, a solução irão encontrar."} }>
					<Form values={stateDesafio1} myref="desafio1" className="desafio1 block">

						<input
						type="text"
						name="field1"
						myref="desafio1_field1"
						desafio="1"
						autoComplete="off"
						placeholder="Palavra 1"
						onChange={handleInputChange}
						value={stateDesafio1.field1}/>

						<input
						type="text"
						name="field2"
						myref="desafio1_field2"
						desafio="1"
						autoComplete="off"
						placeholder="Palavra 2"
						onChange={handleInputChange}
						value={stateDesafio1.field2}/>

						<input
						type="text"
						name="field3"
						myref="desafio1_field3"
						desafio="1"
						autoComplete="off"
						placeholder="Palavra 3"
						onChange={handleInputChange}
						value={stateDesafio1.field3}/>

					</Form>
				</Card>

				<Card card={ {"title": "Desafio 2 - Quebra-Cabeça", "description": ""} }>
					<Form className="desafio2">

						<div className="line">

							<div className="img-wrapper">
								<img src="/imgs/desafio2/field1.png" />
							</div>
							<input
							type="text"
							name="field1"
							myref="desafio2_field1"
							desafio="2"
							autoComplete="off"
							placeholder="Quantos Besouros?"
							onChange={handleInputChange}
							value={stateDesafio2.field1}/>

						</div>

						<div className="line">

							<div className="img-wrapper">
								<img src="/imgs/desafio2/field2.png" />
							</div>
							<input
							type="text"
							name="field2"
							myref="desafio2_field2"
							desafio="2"
							autoComplete="off"
							placeholder="Quantos Côcos?"
							onChange={handleInputChange}
							value={stateDesafio2.field2}/>

						</div>

						<div className="line">

							<div className="img-wrapper">
								<img src="/imgs/desafio2/field3.png" />
							</div>
							<input
							type="text"
							name="field3"
							myref="desafio2_field3"
							desafio="2"
							autoComplete="off"
							placeholder="Quantas Adagas?"
							onChange={handleInputChange}
							value={stateDesafio2.field3}/>

						</div>

					</Form>
				</Card>

				<Card card={ {"title": "Desafio 3 - Evidências", "description": "Um crime foi cometido e houve uma confusão nas evidências encontradas. Organize as evidências e nos ajude a identificar quem é quem e onde vivem o assassino, vítima, cúmplice e testemunda deste caso."} }>
					<Form className="desafio3">

						<div className="line">

							<label>Assasino
								<input
								type="text"
								name="field1"
								myref="desafio3_field1"
								desafio="3"
								autoComplete="off"
								placeholder="Quem é o Assasino?"
								onChange={handleInputChange}
								value={stateDesafio3.field1}/>
							</label>

							<label>Casa
								<select 
								name="field2"
								myref="desafio3_field2"
								desafio="3"
								onChange={handleInputChange}
								value={stateDesafio3.field2} >
									<option defaultValue="0">Selecione uma casa</option>
									<option value="AZUL">AZUL</option>
									<option value="VERMELHA">VERMELHA</option>
									<option value="CINZA">CINZA</option>
									<option value="GRANDE">GRANDE</option>
								</select>
							</label>

						</div>

						<div className="line">

							<label>Vítima
								<input
								type="text"
								name="field3"
								myref="desafio3_field3"
								desafio="3"
								autoComplete="off"
								placeholder="Quem é a Vítima?"
								onChange={handleInputChange}
								value={stateDesafio3.field3}/>
							</label>

							<label>Casa
								<select 
								name="field4"
								myref="desafio3_field4"
								desafio="3"
								onChange={handleInputChange}
								value={stateDesafio3.field4} >
									<option defaultValue="0">Selecione uma casa</option>
									<option value="AZUL">AZUL</option>
									<option value="VERMELHA">VERMELHA</option>
									<option value="CINZA">CINZA</option>
									<option value="GRANDE">GRANDE</option>
								</select>
							</label>

						</div>

						<div className="line">

							<label>Testemunha
								<input
								type="text"
								name="field5"
								myref="desafio3_field5"
								desafio="3"
								autoComplete="off"
								placeholder="Quem é a Testemunha?"
								onChange={handleInputChange}
								value={stateDesafio3.field5}/>
							</label>

							<label>Casa
								<select 
								name="field6"
								myref="desafio3_field6"
								desafio="3"
								onChange={handleInputChange}
								value={stateDesafio3.field6} >
									<option defaultValue="0">Selecione uma casa</option>
									<option value="AZUL">AZUL</option>
									<option value="VERMELHA">VERMELHA</option>
									<option value="CINZA">CINZA</option>
									<option value="GRANDE">GRANDE</option>
								</select>
							</label>

						</div>

						<div className="line">

							<label>Cúmplice
								<input
								type="text"
								name="field7"
								myref="desafio3_field7"
								desafio="3"
								autoComplete="off"
								placeholder="Quem é o Cúmplice?"
								onChange={handleInputChange}
								value={stateDesafio3.field7}/>
							</label>

							<label>Casa
								<select 
								name="field8"
								myref="desafio3_field8"
								desafio="3"
								onChange={handleInputChange}
								value={stateDesafio3.field8} >
									<option defaultValue="0">Selecione uma casa</option>
									<option value="AZUL">AZUL</option>
									<option value="VERMELHA">VERMELHA</option>
									<option value="CINZA">CINZA</option>
									<option value="GRANDE">GRANDE</option>
								</select>
							</label>

						</div>

					</Form>
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
