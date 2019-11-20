import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
export default class SignUp extends Component {
    constructor(){
        super();
        this.state={
           
            
                name: '',
                dob:'',
                telephone:'',
                email:'',
                residence:'',
                username:'',
                userpass:'',
                hospital:''
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
   // console.log(target.value)
 };
 handleSubmit = event => {
   event.preventDefault();
   console.log(this.state)
   axios.post('/doctors',this.state)
   .then(()=> console.log("doctor added"))
   .catch(err =>{console.log(err)})

//    this.setState(
//                 this.state.name= '',
//                 this.state.dob='',
//                 this.state.telephone='',
//                 this.state.email='',
//                 this.state.residence='',
//                 this.state.username='',
//                 this.state.userpass='',
//                 this.state.hospital=''
//    )
   this.props.history.push('/dashboard')
  
 };

  render() {
    return (
        <div style={{ margin: " 100px 400px 0px 400px" }} className="align-content-center ">
        <Form  onSubmit = {this.handleSubmit}>
              
        <Form.Group controlId="name">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" name="name" value = {this.state.name} onChange={this.handleChange} required/>
        </Form.Group>
                <Form.Group controlId="dob">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="Date" name="dob"   value = {this.state.dob} onChange={this.handleChange} required />
                </Form.Group>
               
             
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email"  value = {this.state.email} onChange={this.handleChange} required />
                </Form.Group>
                <Form.Group controlId="telephone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" name="telephone"  value = {this.state.telephone} onChange={this.handleChange} required />
                </Form.Group>
                <Form.Group controlId="residence">
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Residential Address" name="residence"  value = {this.state.residence} onChange={this.handleChange} required />
                </Form.Group>
                <Form.Group controlId="hospital">
                    <Form.Label>Working Hospital</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Hospital" name="hospital"  value = {this.state.hospital} onChange={this.handleChange}required />
                </Form.Group>
                
                
                <Form.Group controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username"  value = {this.state.username} onChange={this.handleChange} required />
                </Form.Group>

                <Form.Group controlId="userpass">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="userpass"  value = {this.state.userpass} onChange={this.handleChange} required />
                </Form.Group>
                
                <Button type = 'submit' >SignUP</Button>
        </Form>
      </div>
    )
  }
}
