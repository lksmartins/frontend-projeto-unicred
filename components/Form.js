import React, { useState, useRef } from 'react'
import Modal from './Modal'

export default function Form(props) {

    const defaultButtonText = ()=>{return(<><i className="fas fa-paper-plane"/> Enviar</>)}
    const loadingButtonText = <i className="fas fa-spin fa-spinner"/>

    const refObject = props.refObject ? props.refObject : {[props.id]:""}

    const [stateValue, setValue] = useState(refObject)
    const [modalShow, setModalShow] = useState(false)
    const [showMessage, setShowMessage] = useState('')
    const [buttonText, setButtonText] = useState(defaultButtonText)

    const button = useRef(null)

    function handleInputChange(e) {

        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.name
    
        setValue({[name]: value})
    }

    async function handleSubmit(e) {

        e.preventDefault()

        // load button
        setButtonText(loadingButtonText)

        const code = stateValue[e.target[0].name]
        const myRef = e.target[0].attributes.myref.value
        
        const res = await fetch('https://chavemestra.net/api/unicred/index.php', {
        method: 'POST',
        body: JSON.stringify({ 
            token:'rUiDIxjZHIoC8OYlb8lK6xspIwZ78TtJ', 
            action: props.api_action ? props.api_action : 'code_check',
            code: code,
            ref: myRef
            })
        })

        const response = await res.json()

        console.log(res.status, response)

        // modal
        if( response.status == 200 ){
            props.modalSet ? props.modalSet(true) : setModalShow(true)
            props.modalMessage ? props.modalMessage(response.unit) : setModalShow(true)
            props.inputBack ? props.inputBack(code) : null
        }
        else{
            setShowMessage(response.message)
            setModalShow(true)
        }

        // form
        setButtonText(defaultButtonText)
        
    }

    return(
        <form className={props.className ? props.className : '' } onSubmit={handleSubmit}>
            { props.children ? props.children :
                <input
                type="text"
                name={props.id}
                myref={props.id}
                autoComplete="off"
                placeholder="Insira a senha"
                onChange={handleInputChange}
                value={stateValue[props.id]}/>
            }
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