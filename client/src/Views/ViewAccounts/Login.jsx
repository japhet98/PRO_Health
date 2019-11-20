import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'
import '../../res/css/login.css'
import{ Redirect} from 'react-router-dom'
export default class Login extends Component {
    constructor(){
        super();
        this.state={
        
            username:"",
            userpass:""
    
      }
      
    }

    handleSumbit = event=>{
      let name;
      let pass ;
      event.preventDefault();
      fetch(`/doctors/${this.state.username}/${this.state.userpass}`)
      .then(res => res.json())
      .then(data =>{data.map(e=>
        {
          name = e.username 
          pass = e.userpass 
          if((name = this.state.username) && (pass == this.state.userpass)){
       console.log('Login succesful')
       this.props.history.push('/dashboard')
     }
     else{
      console.log('Login failed')
     }
         })})
      
     
     

    }
    handleChange = ({target}) =>{
      this.setState({ [target.name]: target.value });
    }
  render() {
    return (
      <Form className="login_body" onSubmit = {this.handleSumbit}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="e.g Japhet" name="username" value = {this.state.username}  onChange = {this.handleChange} required />  
        </Form.Group>

        <Form.Group controlId="userpass">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" name="userpass" value = {this.state.userpass}  onChange = {this.handleChange}  required/>
        </Form.Group>
        <Form.Group controlId="checkbox">
          <Form.Check type="checkbox" label={<a href="/">Agree to our terms and conditions</a>} required/>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    )
  }
}
