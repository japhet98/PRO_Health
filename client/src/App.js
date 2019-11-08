import React from 'react';
import logo from './logo.svg';
import './App.css';
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



function App() {
  return (
    <BrowserRouter>
    
      <Switch>
       
           
        <Route path="/dashboard" component={Dashboard}/>
        <Route exact path="/" component={HomePage} />
        <Route path="*" component={Error404} />
      
   
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
