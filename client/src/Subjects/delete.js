import React from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class DeleteSubject extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: localStorage.getItem('id'),
            name: localStorage.getItem('name')
        }
        this.deleteSubject = this.deleteSubject.bind(this)
        
    }
    deleteSubject(){
        apiRouter.delete(this.props.apiUrl + this.state.id, {
            id: this.state.id,
            name: this.state.name
        })
    }
    render() {
        return (
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Delete subject {this.state.name}</Modal.Title>
              </Modal.Header>
        
              <Modal.Body>
                <p>Are you sure you want to delete?</p>
              </Modal.Body>
        
              <Modal.Footer>
                <Button variant="secondary" href="/subject">No</Button>
                <Button variant="primary" href="/subject" onClick={this.deleteSubject}>Yes</Button>
              </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default DeleteSubject