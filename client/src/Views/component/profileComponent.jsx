import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class OfficerProfile extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         officer:[]
      };
    };

    componentDidMount(){
        fetch('/doctors/admin1')
        .then(res => res.json())
            .then(officer => this.setState({ officer }, () => console.log("Doctors fetched", this.state.officer)));
    }
    
    data = {
        Name: "Japhet Kuntu Blankson",
        Email: "example@gmail.com",
        NHISID: "1241542123",
        ResAddress: "Tarkwa",
        Phone: "0242232323",
        HospitalName:"UMaT Clinic",
        Title: "Doctor",

    }
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-xl-2">
                        <h1 className=" rounded-circle" >Profile Picture</h1>
                        <div><Button>Edit DP</Button></div>
                    </div>
                    <div class="col-xl-10">
                        <span> <Button style={{ float: "right" }}>Edit Profile</Button></span>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-12">

                        <hr />
                        <div style={{ color: "white", backgroundColor: "darkblue" }}> About </div>
                        <hr />
                        <hr />
                    {this.state.officer.map(e =>
                    <div>
                       <label >Name</label>
                            <h4> {e.name} ({this.data.Title}) </h4>
                            <hr />

                            <label >Hospital </label>
                            <h4> {e.hospital}</h4>
                            <hr />

                        
                            <label >Email</label>
                            <h4> {e.email}</h4>

                            <hr />
                            <label >Phone</label>
                            <h4>{e.telephone}</h4>

                            <hr />

                            <label >Residential Address</label>
                            <h4>{e.residence}</h4>
                            <hr />
                        </div>
                    )}
                        
                    </div>
                </div>
            </div>
        )
    }
}
