import React from 'react';
import HomePage from './Views/IndexPage';
import {
  BrowserRouter ,
  Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
 
 
} from "react-router-dom";
import Dashboard from './Views/ViewAccounts/Dashboard';
import LoginPage from './Views/ViewAccounts/Login';
import Error404 from './Views/Layout/Error';
import Layout from './Views/Layout/masterpage';
import SignUp from './Views/ViewAccounts/signup';
import PatientAboutPage from './Views/component/PatientAboutPage';
import OfficerProfile from './Views/component/profileComponent';
import PatientDetail from './Views/component/table';
import EditPatientProfile from './Views/component/editPatientProfile';
import PatientProfile from './Views/component/patientsprofile';
import ViewDashboard from './Views/ViewComponent/ViewDashboard';
import AboutPage from './Views/Layout/aboutPage';



function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Layout  path="/">   
            
        <Switch>
        <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={LoginPage} />
          < Route path="/signup" component={SignUp} />
          <Route exact path="/" component={HomePage} />   
          <Route path ="/about-us" component ={AboutPage}/>
        </Switch>

      </Layout>    
      </Switch>
  
    </BrowserRouter>
  );
}

export default App;
