import React from 'react'
import Home from './Home'
import Search from './Search'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () =>{
    return (
        <>
            <Navbar className="navbar navbar-dark bg-dark" expand="lg">
            <Navbar.Brand href="#home">FOODYYS</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Search">Search Recipes</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation
