import React, { Component, Children } from 'react'
import Table from '../component/table'
import Login from './Login';
import SignUp from './signup';
import { Router, Route, Switch, BrowserRouter,Link } from 'react-router-dom'
import PatientProfile from '../component/patientsprofile'
import EditPatientProfile from '../component/editPatientProfile';
import OfficerProfile from '../component/profileComponent';
import SideBar from '../component/sidebar';
import PatientMedicalReport from '../component/patientsMedicalReport';
import PatientDetail from '../component/table';


class Dashboard extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }

   
    render() { 

      const routes = [
  {
    path: "/dashboard/patients",
    exact: true,
    main: () =><PatientDetail/>
  },
  {
    path: "/dashboard",
    main: () =><OfficerProfile/>
  },
   {
          path: "/dashboard/patients/about",
          main: () => <PatientProfile/>
  }
];
       
       
            return (
               
            <div className="fa-dashboard" style={{}}>
                <div class="row">
                    <h1>Header</h1>
                </div>
                <div class="row">
                        <div class=" col-xl-3">
                            <SideBar/>
                    
                    </div>
                    <div class="col-xl-9">
                            <Switch>
                                {routes.map((route, index) => (
                                    // Render more <Route>s with the same paths as
                                    // above, but different components this time.
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

               
            );
    
    }
}
 
export default Dashboard;