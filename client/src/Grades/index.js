import React from "react"
import apiRouter from '../apiRouter'

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Grade extends React.Component{
    constructor(props){
        super(props)

        this.storageData = this.storageData.bind(this)

    }
    storageData(){
        console.log(this.props.data)
        let { id, name, teacherId } = this.props.data;
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
        localStorage.setItem('teacherId', teacherId);
    }
    render(){
        return (
            <tr>
                <td>
                    {this.props.data.name}
                </td>
                <td>
                    {this.props.data.teacherId}
                </td>
                <td>
                    <Button href="/grade/edit" onClick={this.storageData}>Edit</Button> 
                    &nbsp;
                    <Button href="/grade/delete" variant="danger" onClick={this.storageData}>Delete</Button>
                </td>
            </tr>
        )
    }
}

class GradeList extends React.Component{
    constructor(props){
        super(props)
        this.state = { grades: []}
    }
    loadData() {
        apiRouter.get(this.props.apiUrl).then((res) => (
            // this.setState({ grades: [...res.data].sort((a, b) => a.id - b.id) })
            this.setState({ grades: [...res].sort((a, b) => a.id - b.id) })
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
                        <th>Name</th>
                        <th>Teacher Id</th>
                        <th>
                            <Button href="/grade/create/">Create new</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.grades.map((el) => (
                        <Grade data={el} key={el.id} />
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default GradeList