import React from 'react'

export default function Card(props) {

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
            <p className="description">{card.description}</p>
            {props.children}
        </div>
    )
}