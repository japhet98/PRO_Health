import React, { Component } from 'react'

export default class PatientAboutPage extends Component {
  constructor(props){
    super(props)
    this.state={
        data :this.props.patient
    }
  }
    // data = {
    //     Name: "Japhet Kuntu Blankson",
    //     Email: "example@gmail.com",
    //     NHISID: "1241542123",
    //     ResAddress: "Tarkwa",
    //     Phone: "0242232323"

    // }
  render() {
    return (
      <>
            <hr />
            <label >Name</label>
            <h4> {this.state.data.name}</h4>
            <hr />
          
            <label >Phone</label>
            <h4>{this.state.data.telephone}</h4>
            <hr />
            <label >NHIS ID</label>
            <h4> {this.state.data.nhisid}</h4>
            <hr />
            <hr />
            <label >Residential Address</label>
            <h4>{this.state.data.residence}</h4>
            <hr />
      </>
    )
  }
}
