import React, { useEffect } from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class EditGrade extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: localStorage.getItem('id'),
            name: localStorage.getItem('name'),
            teacherId: localStorage.getItem('teacherId'),
        }
        this.putGrade = this.putGrade.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeTeacherId = this.onChangeTeacherId.bind(this)        
    }
    onChangeName(e) {
        this.setState({name: e.target.value})
    }
    onChangeTeacherId(e) {
        this.setState({teacherId: e.target.value})
    }
    putGrade() {
        apiRouter.put(this.props.apiUrl + this.state.id, {
            id: this.state.id,
            name: this.state.name,
            teacherId: this.state.teacherId
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
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.name} onChange={this.onChangeName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Teacher id</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.teacherId} onChange={this.onChangeTeacherId}/>
                        </Form.Group>
                        <Button type='submit' variant="danger" href="/grade">Cancel</Button> &nbsp;
                        <Button type='submit' variant="success" 
                            onClick={this.putGrade} href="/grade">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default EditGrade