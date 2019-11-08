import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import  Button  from 'react-bootstrap/Button'
import '../../res/css/login.css'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:"",
            password:""
        }
    }
  render() {
    return (
      <Form className="login_body">
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="e.g Japhet" name="username" required />  
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" name="password" required/>
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
