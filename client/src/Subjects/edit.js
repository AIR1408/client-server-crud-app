import React, { useEffect } from "react"
import apiRouter from "../apiRouter";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class EditSubject extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: localStorage.getItem('id'),
            name: localStorage.getItem('name')
        }
        this.putSubject = this.putSubject.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        
    }
    onChangeName(e) {
        this.setState({name: e.target.value})
    }
    putSubject() {
        apiRouter.put(this.props.apiUrl + this.state.id, {
            id: this.state.id,
            name: this.state.name
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
                            <Form.Label>Subject name</Form.Label>
                            <Form.Control type="text" defaultValue={this.state.name} onChange={this.onChangeName}/>
                        </Form.Group>
                        <Button type='submit' variant="danger" href="/subject">Cancel</Button> &nbsp;
                        <Button type='submit' variant="success" 
                            onClick={this.putSubject} href="/subject">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default EditSubject