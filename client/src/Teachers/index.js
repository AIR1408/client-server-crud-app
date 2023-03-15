import React from "react"
import apiRouter from '../apiRouter'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Teacher extends React.Component{
    constructor(props){
        super(props)

        this.storageData = this.storageData.bind(this)

    }
    storageData(){
        console.log(this.props.data)
        let { id, firstName, lastName, subjectId } = this.props.data;
        localStorage.setItem('id', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('subjectId', subjectId);
    }
    render(){
        return (
            <tr>
                <td>
                    {this.props.data.firstName}
                </td>
                <td>
                    {this.props.data.lastName}
                </td>
                <td>
                    {this.props.data.subjectId}
                </td>
                <td>
                    <Button href="/teacher/edit" onClick={this.storageData}>Edit</Button> 
                    &nbsp;
                    <Button href="/teacher/delete" variant="danger" onClick={this.storageData}>Delete</Button>
                </td>
            </tr>
        )
    }
}

class TeacherList extends React.Component{
    constructor(props){
        super(props)
        this.state = { teachers: []}
    }
    loadData() {
        apiRouter.get(this.props.apiUrl).then((res) => (
            // this.setState({ teachers: [...res.data].sort((a, b) => a.id - b.id) })
            this.setState({ teachers: [...res].sort((a, b) => a.id - b.id) })
        ))
    }
    componentDidMount(){
        this.loadData()
    }
    render(){
        // console.log(this.props.apiUrl)
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Subject Id</th>
                        <th>
                            <Button href="/teacher/create/">Create new</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.teachers.map((el) => (
                        <Teacher data={el} key={el.id} />
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default TeacherList