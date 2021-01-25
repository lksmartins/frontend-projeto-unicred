import React from 'react'
import { Modal } from 'react-bootstrap'

import Button from './Button'

export default function myModal(props){
    
    return (
        <Modal
            {...props}
            centered
            className="modal"
        >
            <Modal.Header>
                <Modal.Title>
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}><i className="fas fa-times-circle"/> Fechar</Button>
            </Modal.Footer>
        </Modal>
    )

}