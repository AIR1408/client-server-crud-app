import React from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class CreateTeacher extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            subjectId: 0
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeSubjectId = this.onChangeSubjectId.bind(this)
        this.postTeacher = this.postTeacher.bind(this)
    }

    onChangeFirstName(e) {
        this.setState({firstName: e.target.value})
    }
    onChangeLastName(e) {
        this.setState({lastName: e.target.value})
    }
    onChangeSubjectId(e) {
        this.setState({subjectId: e.target.value})
    }

    postTeacher() {
        apiRouter.post(this.props.apiUrl, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            subjectId: this.state.subjectId
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
                            <Form.Control type="text" onChange={this.onChangeFirstName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" onChange={this.onChangeLastName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject id</Form.Label>
                            <Form.Control type="text" onChange={this.onChangeSubjectId}/>
                        </Form.Group>
                        <Button type='submit' variant="danger" href="/teacher">Cancel</Button> &nbsp;
                        <Button type='submit' variant="success" 
                            onClick={this.postTeacher} href="/teacher">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}


export default CreateTeacher;