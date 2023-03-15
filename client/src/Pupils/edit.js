import React, { useEffect } from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class EditPupil extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: localStorage.getItem('id'),
            firstName: localStorage.getItem('firstName'),
            lastName: localStorage.getItem('lastName'),
            gradeId: localStorage.getItem('gradeId'),
        }
        this.putPupil = this.putPupil.bind(this)
        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeGradeId = this.onChangeGradeId.bind(this)        
    }
    onChangeFirstName(e) {
        this.setState({firstName: e.target.value})
    }
    onChangeLastName(e) {
        this.setState({lastName: e.target.value})
    }
    onChangeGradeId(e) {
        this.setState({gradeId: e.target.value})
    }
    putPupil() {
        apiRouter.put(this.props.apiUrl + this.state.id, {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gradeId: this.state.gradeId
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    render() {
        return (
            <Row>
                <Col xs={6}>
                    <Form>
                    <Form.Group className="mb-3">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.firstName} onChange={this.onChangeFirstName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.lastName} onChange={this.onChangeLastName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Grade id</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.gradeId} onChange={this.onChangeGradeId}/>
                        </Form.Group>
                        <Button type='submit' variant="danger" href="/pupil">Cancel</Button> &nbsp;
                        <Button type='submit' variant="success" 
                            onClick={this.putPupil} href="/pupil">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default EditPupil