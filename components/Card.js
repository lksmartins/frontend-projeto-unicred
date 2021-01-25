import React, { useState } from 'react'
import Form from './Form'
import cards from '../pages/cards.json'

export default function Card(props) {

    const refObject = []
    cards.map(card =>{ return( refObject[card.ref] = "" ) })

    const card = props.card

    return (
        <div {...props} className="card">
            <h3>{card.title}</h3>
            <img src={`/imgs/${card.img}`}/>
            <p>{card.description}</p>
            <Form id={card.ref} refObject={refObject}/>
        </div>
    )
}