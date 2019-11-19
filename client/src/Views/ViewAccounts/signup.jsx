import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default class SignUp extends Component {
    constructor(){
        super();
        this.state={

        }
    }
  render() {
    return (
        <div style={{ margin: " 100px 400px 0px 400px" }} className="align-content-center ">
        <Form>
              
        <Form.Group controlId="firstname">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Full Name" name="name" required/>
        </Form.Group>
                <Form.Group controlId="date_of_birth">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="Date" name="DateOfBirth" required />
                </Form.Group>
                <Form.Group controlId="place_of_origin">
                    <Form.Label>Place Of Origin</Form.Label>
                    <Form.Control type="text" placeholder="Enter place of origin" name="placeoforigin" required />
                </Form.Group>
             
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" name="email" required />
                </Form.Group>
                <Form.Group controlId="phonenumber">
                    <Form.Label>Phone Number 0248384499</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" name="phonenumber" required />
                </Form.Group>
                <Form.Group controlId="residential_address">
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Residential Address" name="ResdAddress" required />
                </Form.Group>
                <Form.Group controlId="hospital">
                    <Form.Label>Working Hospital</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Hospital" name="hospital" required />
                </Form.Group>
                <Form.Group controlId="profilepicture">
                    <Form.Label>Upload Profile Picture</Form.Label>
                    <Form.Control type="file" name="profilepicture" required />
                </Form.Group>
                <Form.Group controlId="specialization">
                    <Form.Label>Specialization</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Specilization" name="specialization" required />
                </Form.Group>

                <Form.Group controlId="username">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" name="username" required />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" name="password" required />
                </Form.Group>
                
                <Button>SignUP</Button>
        </Form>
      </div>
    )
  }
}
