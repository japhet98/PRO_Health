import React, { Component } from 'react'
import {  Router,Route,Switch,BrowserRouter } from 'react-router-dom'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import Dashboard from '../ViewAccounts/Dashboard'
import Error404 from './Error'
import HomePage from '../IndexPage'
export default class Layout extends Component {
  render() {
    return (
      <div className=" ">
        <Header/>
           {this.props.children}
        <Footer/>
      </div >
    )
  }
}
