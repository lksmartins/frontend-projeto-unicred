import React, { useState } from 'react'
import styles from '../styles/Card.module.css'
import cards from '../pages/cards.json'

export default function Card(props) {

    const refObject = []
    cards.map(card =>{
        return(
            refObject[card.ref] = ""
        )
    })

    const [stateValue, setValue] = useState(refObject)

    function handleInputChange(e) {

        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
    
        setValue({[name]: value})
    }

    async function handleSubmit(e) {

        e.preventDefault()

        console.log(e)
        
        const res = await fetch('https://chavemestra.net/api/unicred/index.php', {
        method: 'POST',
        body: JSON.stringify({ 
            token:'rUiDIxjZHIoC8OYlb8lK6xspIwZ78TtJ', 
            action: 'code_check',
            code: stateValue[e.target[0].name],
            ref: e.target[0].name
            })
        })

        const response = await res.json()

        alert(response.message)

        console.log(res.status, response)
        
    }

    console.log(stateValue)

    const card = props.card

    return (

        <div {...props} className={styles.card}>
            <h3>{card.title}</h3>
            <img src={`/imgs/${card.img}`}/>
            <p>{card.description}</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name={card.ref}
                    placeholder="Insira a senha" 
                    onChange={handleInputChange}
                    value={stateValue[card.ref]}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}