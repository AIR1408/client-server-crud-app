import React from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class DeleteTeacher extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          id: localStorage.getItem('id'),
          firstName: localStorage.getItem('firstName'),
          lastName: localStorage.getItem('lastName'),
          subjectId: localStorage.getItem('subjectId'),
        }
        this.deleteTeacher = this.deleteTeacher.bind(this)
        
    }
    deleteTeacher(){
        apiRouter.delete(this.props.apiUrl + this.state.id, {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            subjectId: this.state.subjectId
        })
    }
    render() {
        return (
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Delete teacher {this.state.firstName} {this.state.lastName}</Modal.Title>
              </Modal.Header>
        
              <Modal.Body>
                <p>Are you sure you want to delete?</p>
              </Modal.Body>
        
              <Modal.Footer>
                <Button variant="secondary" href="/teacher">No</Button>
                <Button variant="primary" href="/teacher" onClick={this.deleteTeacher}>Yes</Button>
              </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default DeleteTeacher