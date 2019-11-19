import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class EditPatientProfile extends Component {
  render() {
    
    return (
        <div style={{ margin: " 100px 400px 0px 200px" }} className="align-content-center ">
            <Form>

                <Form.Group controlId="firstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" name="firstname" required />
                </Form.Group>
                <Form.Group controlId="lastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" name="lastname" required />
                </Form.Group>
                <Form.Group controlId="othername">
                    <Form.Label>Other Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Other Name" name="othername" />
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
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" name="phonenumber" required />
                </Form.Group>
                <Form.Group controlId="residential_address">
                    <Form.Label>Residential Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Residential Address" name="ResdAddress" required />
                </Form.Group>
                <Form.Group controlId="lastname">
                    <Form.Label>Specialization</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Specialization" name="specialization" required />
                </Form.Group>
                <Button>Edit</Button>
            </Form>
        </div>
    )
  }
}
