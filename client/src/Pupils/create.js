import React from "react"
import apiRouter from '../apiRouter'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class CreatePupil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            gradeId: 0
        }

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangeSubjectId = this.onChangeSubjectId.bind(this)
        this.postPupil = this.postPupil.bind(this)
    }

    onChangeFirstName(e) {
        this.setState({firstName: e.target.value})
    }
    onChangeLastName(e) {
        this.setState({lastName: e.target.value})
    }
    onChangeSubjectId(e) {
        this.setState({gradeId: e.target.value})
    }

    postPupil() {
        apiRouter.post(this.props.apiUrl, {
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
                            <Form.Control type="text" onChange={this.onChangeFirstName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" onChange={this.onChangeLastName}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Grade id</Form.Label>
                            <Form.Control type="text" onChange={this.onChangeSubjectId}/>
                        </Form.Group>
                        <Button type='submit' variant="danger" href="/pupil">Cancel</Button> &nbsp;
                        <Button type='submit' variant="success" 
                            onClick={this.postPupil} href="/pupil">Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}


export default CreatePupil;