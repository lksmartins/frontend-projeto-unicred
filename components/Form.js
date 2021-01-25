import React, { useState, useRef } from 'react'
import Modal from './Modal'

export default function Form(props) {

    const defaultButtonText = 'Enviar'
    const loadingButtonText = <i className="fas fa-spin fa-spinner"/>

    const [stateValue, setValue] = useState( props.refObject ? props.refObject : null )
    const [modalShow, setModalShow] = useState(false)
    const [showMessage, setShowMessage] = useState('')
    const [buttonText, setButtonText] = useState(defaultButtonText)

    const input = useRef(null);
    const button = useRef(null);

    function handleInputChange(e) {

        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
    
        setValue({[name]: value})
    }

    async function handleSubmit(e) {

        e.preventDefault()

        // disable input
        input.current.disabled = true

        // load button
        setButtonText(loadingButtonText)
        
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

        console.log(res.status, response)

        setShowMessage(response.message)
        setModalShow(true)

        input.current.disabled = false
        setButtonText(defaultButtonText)
        
    }

    return(
        <form onSubmit={props.onSubmit ? props.onSubmit : handleSubmit}>
            <input
                ref={input}
                type="text"
                name={props.id}
                placeholder="Insira a senha" 
                onChange={handleInputChange}
                value={stateValue[props.id]}
            />
            <button ref={button} className="button" type="submit">{buttonText}</button>

            <Modal 
                show={modalShow}
                onHide={()=>setModalShow(false)}
                title="Aviso"
            >
                <p>{showMessage}</p>
            </Modal>

        </form>
    )

}