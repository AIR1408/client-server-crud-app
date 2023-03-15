import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component {

    render(){
        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/subject">Subjects</Nav.Link>
                        <Nav.Link href="/teacher">Teachers</Nav.Link>
                        <Nav.Link href="/grade">Grades</Nav.Link>
                        <Nav.Link href="/pupil">Pupils</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default Header