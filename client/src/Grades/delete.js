import React from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



class DeleteGrade extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          id: localStorage.getItem('id'),
          name: localStorage.getItem('name'),
          teacherId: localStorage.getItem('teacherId'),
        }
        this.deleteGrade = this.deleteGrade.bind(this)
        
    }
    deleteGrade(){
        apiRouter.delete(this.props.apiUrl + this.state.id, {
            id: this.state.id,
            name: this.state.name,
            teacherId: this.state.teacherId
        })
    }
    render() {
        return (
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Delete grade {this.state.name}</Modal.Title>
              </Modal.Header>
        
              <Modal.Body>
                <p>Are you sure you want to delete?</p>
              </Modal.Body>
        
              <Modal.Footer>
                <Button variant="secondary" href="/grade">No</Button>
                <Button variant="primary" href="/grade" onClick={this.deleteGrade}>Yes</Button>
              </Modal.Footer>
            </Modal.Dialog>
        )
    }
}

export default DeleteGrade