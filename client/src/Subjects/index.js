import React from "react"

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import apiRouter from '../apiRouter'

class Subject extends React.Component{
    constructor(props){
        super(props)

        this.storageData = this.storageData.bind(this)

    }
    storageData(){
        console.log(this.props.data)
        let { id, name } = this.props.data;
        localStorage.setItem('id', id);
        localStorage.setItem('name', name);
    }
    render(){
        return (
            <tr>
                <td>
                    {this.props.data.name}
                </td>
                <td>
                    {/* <Link to={this.props.data.id} relative="/subject/edit" */}
                    <Button href="/subject/edit" onClick={this.storageData}>Edit</Button> 
                    &nbsp;
                    <Button href="/subject/delete" variant="danger" onClick={this.storageData}>Delete</Button>
                </td>
            </tr>
        )
    }
}

class SubjectList extends React.Component{
    constructor(props){
        super(props)
        this.state = { subjects: []}
    }
    loadData() {
        apiRouter.get(this.props.apiUrl).then((res) => (
            // this.setState({ subjects: [...res.data].sort((a, b) => a.id - b.id) })
            this.setState({ subjects: [...res].sort((a, b) => a.id - b.id) })
        ))
    }
    componentDidMount(){
        this.loadData()
    }
    render(){
        console.log(this.state.subjects)
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>
                            <Button href="/subject/create/">Create new</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.subjects.map((el) => (
                        <Subject data={el} key={el.id} />
                    ))}
                </tbody>
            </Table>
        )
    }
}

export default SubjectList