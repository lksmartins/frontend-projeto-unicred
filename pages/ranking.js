import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import ReactTable from 'react-table-6'
import 'react-table-6/react-table.css'

import Card from '../components/Card'

export default function Ranking(props) {

	async function setEndTime(){

        const res = await fetch('https://chavemestra.net/api/unicred/index.php', {
            method: 'POST',
            body: JSON.stringify({ 
                token:'rUiDIxjZHIoC8OYlb8lK6xspIwZ78TtJ', 
                action: 'end_time',

                unit: unit
            })
        })

        const response = await res.json()

		console.log(response)
		
		setTimeEnd(true)

    }

    const data = [
        {unit: 'CAMPO GRANDE', time: '01:06'},
        {unit: 'CRUZ ALTA', time: '01:50'},
        {unit: 'REGIONAL', time: '02:26'},
        {unit: 'SANTA ROSA', time: '00:56'},
        {unit: 'SANTO ÂNGELO', time: '00:47'},
        {unit: 'SÃO BORJA', time: '01:36'},
        {unit: 'SÃO LUIZ', time: '01:02'}
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
