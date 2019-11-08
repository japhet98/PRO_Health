import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    useHistory,
    useLocation

} from "react-router-dom";


function Header() {
        return ( 

            <Navbar bg="light" variant="light" className=" navbar-static-top">
                <div className="container">
                <Navbar.Brand >LOGO</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to ="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/check-out">Check Out</Nav.Link>
                </Nav>
                <Nav className=" navbar-right">
                   
                    <Nav.Link >SignUp</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard" >Dashboard</Nav.Link>
                      
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
                </div>
            </Navbar>
         );
    }



 
export default Header;