import React from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class DeletePupil extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          id: localStorage.getItem('id'),
          firstName: localStorage.getItem('firstName'),
          lastName: localStorage.getItem('lastName'),
          gradeId: localStorage.getItem('gradeId'),
        }
        this.deletePupil = this.deletePupil.bind(this)
        
    }
    deletePupil(){
        apiRouter.delete(this.props.apiUrl + this.state.id, {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gradeId: this.state.gradeId
        })
    }
    render() {
        return (
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Delete pupil {this.state.firstName} {this.state.lastName}</Modal.Title>
              </Modal.Header>
        
              <Modal.Body>
                <p>Are you sure you want to delete?</p>
              </Modal.Body>
        
              <Modal.Footer>
                <Button variant="secondary" href="/pupil">No</Button>
                <Button variant="primary" href="/pupil" onClick={this.deletePupil}>Yes</Button>
              </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default DeletePupil