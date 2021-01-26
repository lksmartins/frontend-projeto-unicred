import React from 'react'
import Form from './Form'
import cards from '../cards.json'

export default function Card(props) {

    const refObject = []
    cards.map(card =>{ return( refObject[card.ref] = "" ) })

    const card = props.card

    function hasImg(){
        if(card.img && card.img !== false){
            return(<img src={`/imgs/${card.img}`}/>)
        }
    }

    return (
        <div {...props} className="card">
            <h3>{card.title}</h3>
            {hasImg()}
            <p>{card.description}</p>
            <Form id={card.ref} api_action={props.api_action ? props.api_action : null} refObject={refObject}/>
        </div>
    )
}