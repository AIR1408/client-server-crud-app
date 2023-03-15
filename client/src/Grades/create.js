import React from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class CreateGrade extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            teacherId: 0
        }

        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeTeacherId = this.onChangeTeacherId.bind(this)
        this.postGrade = this.postGrade.bind(this)
    }

    onChangeName(e) {
        this.setState({name: e.target.value})
    }
    onChangeTeacherId(e) {
        this.setState({teacherId: e.target.value})
    }

    postGrade() {
        apiRouter.post(this.props.apiUrl, {
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
                            <Form.Control type="text" onChange={this.onChangeName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Teacher id</Form.Label>
                            <Form.Control type="text" onChange={this.onChangeTeacherId}/>
                        </Form.Group>
                        <Button type='submit' variant="danger" href="/grade">Cancel</Button> &nbsp;
                        <Button type='submit' variant="success" 
                            onClick={this.postGrade} href="/grade">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}


export default CreateGrade;