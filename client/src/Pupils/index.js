import React from "react"
import apiRouter from '../apiRouter'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Pupil extends React.Component{
    constructor(props){
        super(props)

        this.storageData = this.storageData.bind(this)

    }
    storageData(){
        console.log(this.props.data)
        let { id, firstName, lastName, gradeId } = this.props.data;
        localStorage.setItem('id', id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('gradeId', gradeId);
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
                    {this.props.data.gradeId}
                </td>
                <td>
                    <Button href="/pupil/edit" onClick={this.storageData}>Edit</Button> 
                    &nbsp;
                    <Button href="/pupil/delete" variant="danger" onClick={this.storageData}>Delete</Button>
                </td>
            </tr>
        )
    }
}

class PupilList extends React.Component{
    constructor(props){
        super(props)
        this.state = { pupils: []}
    }
    loadData() {
        apiRouter.get(this.props.apiUrl).then((res) => (
            // this.setState({ pupils: [...res.data].sort((a, b) => a.id - b.id) })
            this.setState({ pupils: [...res].sort((a, b) => a.id - b.id) })
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
                        <th>Grade Id</th>
                        <th>
                            <Button href="/pupil/create/">Create new</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.pupils.map((el) => (
                        <Pupil data={el} key={el.id} />
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default PupilList