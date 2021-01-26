import React from 'react'
import Form from './Form'

export default function Card(props) {

    const refObject = []
    const card = props.card
    refObject[card.ref] = ""

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