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
            <>
                <header style={{marginBottom:'50px'}}>
                    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <Link to="/">  <a class="navbar-brand" >Carousel</a> </Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link to="/"> <a class="nav-link" >Home <span class="sr-only">(current)</span></a> </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/about-us"> <a class="nav-link" >About</a> </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/contact-us">   <a class="nav-link " >Contact Us</a> </Link>
                                </li>
                            </ul>
                            <ul class="navbar-nav navbar-right">
                                <li class="nav-item">
                                    <Link to="/signup">   <a class="nav-link " >Sign Up</a> </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to="/dashboard">   <a class="nav-link " >Dashboard</a> </Link>
                                </li>
                            </ul>
                            <form class="form-inline mt-2 mt-md-0">
                                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </header>
            </>

         );
    }



 
export default Header;