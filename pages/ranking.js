import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'

import Card from '../components/Card'

export async function getServerSideProps(context) {

    const res = await fetch('https://chavemestra.net/api/unicred/index.php', {
        method: 'POST',
        body: JSON.stringify({ 
            token:'rUiDIxjZHIoC8OYlb8lK6xspIwZ78TtJ', 
            action: 'times'
        })
    })

    const response = await res.json()

    return {
        props: {times: response}, // will be passed to the page component as props
    }
}

export default function Ranking(props) {

    const { times } = props

    const data = [
        {unit: 'CAMPO GRANDE', time: times['CAMPO GRANDE']['time'], tips: times['CAMPO GRANDE']['tips']},
        {unit: 'CRUZ ALTA', time: times['CRUZ ALTA']['time'], tips: times['CRUZ ALTA']['tips']},
        {unit: 'REGIONAL', time: times['REGIONAL']['time'], tips: times['REGIONAL']['tips']},
        {unit: 'SANTA ROSA', time: times['SANTA ROSA']['time'], tips: times['SANTA ROSA']['tips']},
        {unit: 'SANTO ÂNGELO', time: times['SANTO ÂNGELO']['time'], tips: times['SANTO ÂNGELO']['tips']},
        {unit: 'SÃO BORJA', time: times['SÃO BORJA']['time'], tips: times['SÃO BORJA']['tips']},
        {unit: 'SÃO LUIZ', time: times['SÃO LUIZ']['time'], tips: times['SÃO LUIZ']['tips']}
    ]

    const columns = [{
        Header: 'Unidade',
        accessor: 'unit',
        sortable: false
      }, {
        Header: 'Tempo',
        accessor: 'time',
        sortable: false
      }
      , {
        Header: 'Dicas',
        accessor: 'tips',
        sortable: false
      }
    ]

	return (
		<div className="container">
		<Head>
			<title>Projeto Unicred - Ranking</title>
		</Head>

		<main className="main">

			<div className="grid">

				<Card card={ {"title": "Ranking", "description": ""} }>
                    <ReactTable
                        data={data}
                        columns={columns}
                        showPagination={false}
                        defaultPageSize={7}

                        sorted={[
                            { // the sorting model for the table
                                id: 'time',
                                desc: false
                            }
                        ]}
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
