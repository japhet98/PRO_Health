import React, { Component } from 'react'
import '../../res/css/navbar.css'
import '../../res/js/nav'
import {Link} from 'react-router-dom'
export default class SideBar extends Component {
  render() {
    return (
        
      <div class="list-group">

        <Link to="/dashboard/"><a class="list-group-item active"><span>Profile</span></a> </Link>
        <Link to="/dashboard/patients"> <a class="list-group-item"><span>Patients</span></a></Link>
        <Link to="/"> <a class="list-group-item"><span>Support</span></a></Link>
        <Link to="/">  <a class="list-group-item"><span>Sandbox Account</span></a></Link>
        <Link to="/">  <a class="list-group-item"> <span>QuickStart Overview</span></a></Link>
        <Link to="/">  <a class="list-group-item"><span>Documentation</span></a></Link>


      </div>
    )
  }
}
