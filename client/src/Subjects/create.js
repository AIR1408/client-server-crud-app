import React from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class CreateSubject extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }

        this.onChangeName = this.onChangeName.bind(this)
        this.postSubject = this.postSubject.bind(this)
    }

    onChangeName(e) {
        this.setState({name: e.target.value})
    }

    postSubject() {
        apiRouter.post(this.props.apiUrl, {
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
                            <Form.Control type="text" onChange={this.onChangeName}/>
                        </Form.Group>
                        <Button type='submit' variant="danger" href="/subject">Cancel</Button> &nbsp;
                        <Button type='submit' variant="success" 
                            onClick={this.postSubject} href="/subject">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}


export default CreateSubject;