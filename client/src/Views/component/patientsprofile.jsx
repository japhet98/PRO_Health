import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import PatientAboutPage from './PatientAboutPage'
import PatientMedicalReport from './patientsMedicalReport'
import HomePage from '../IndexPage'
export default class PatientProfile extends Component {
  
  render() {
    const routes = [
      {
        path: "/dashboard/patients/edit",
        exact: true,
        main: () => <HomePage/>
      },
      {
        path: "/dashboard/patients/about",
        main: () => <PatientAboutPage/>
      },
      {
        path: "/dashboard/patients/medical-report",
        main: () => <PatientMedicalReport/>
      }
    ];

    return (
      <div>
    <div class="row">
        <div class="col-xl-2">
                    <h1 className=" rounded-circle" >Profile Picture</h1>
            <div><Button>Edit DP</Button></div>
        </div>
        <div class="col-xl-10">
                    <span> <Link to="/dashboard/patients/:id/edit"><Button style={{ float: "right" }} >Edit Profile</Button></Link></span>
        </div>
    </div>

    <div class="row">
               <div class="col-xl-12">
                    <hr />
                    <div style={{ color: "white", backgroundColor: "darkblue" }}>
              <Link to="/dashboard/patients/about" > <Button>About</Button> </Link>
              <Link to="/dashboard/patients/medical-report" > <Button>Medical Report</Button> </Link>
                    </div>
                    <hr /> 
            <Switch>
              {routes.map((route, index) => (
                
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>  
                   
               </div>
    </div>
      </div>
    )
  }
}
