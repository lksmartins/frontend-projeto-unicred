import React, { useState } from 'react'
import Modal from './Modal'
import TimerButton from './TimerButton'

export default function Form(props) {

    const defaultButtonText = ()=>{return(<><i className="fas fa-paper-plane"/> Enviar</>)}
    const loadingButtonText = <i className="fas fa-spin fa-spinner"/>

    const refObject = props.refObject ? props.refObject : {[props.id]:""}

    const [stateValue, setValue] = useState(refObject)
    const [modalShow, setModalShow] = useState(false)
    const [showMessage, setShowMessage] = useState('')
    const [buttonText, setButtonText] = useState(defaultButtonText)
    const [buttonClass, setButtonClass] = useState("button")
    const [buttonDisabled, setButtonDisabled] = useState("")

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

        const code = props.values ? props.values : e.target[0].value
        const myRef = props.myref ? props.myref : e.target[0].attributes.myref.value

        console.log(myRef, code)
        
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
        if( props.modalSet && response.status === 200 ){
            props.modalSet ? props.modalSet(true) : setModalShow(true)
            props.modalMessage ? props.modalMessage(response.unit) : null
            props.inputBack ? props.inputBack(code) : null
            props.callback ? props.callback(myRef) : null
    
            setButtonText("Solucionado")
            setButtonClass("button solved")
            setButtonDisabled("disabled")
        }
        else{
            setShowMessage(response.message)
            setModalShow(true)

            setButtonText(defaultButtonText)
        }
        
        
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
            {
                props.timerbutton ?
                <TimerButton time={props.timerbutton.time} start={props.timerbutton.start} className={buttonClass} disabled={buttonDisabled} type="submit">{buttonText}</TimerButton>
                :
                <button className={buttonClass} disabled={buttonDisabled} type="submit">{buttonText}</button> 
            }
            

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