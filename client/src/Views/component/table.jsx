import React, { Component } from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import Button from 'react-bootstrap/Button'
import PatientAboutPage from './PatientAboutPage';
import { Redirect } from 'react-router-dom'

export default class PatientDetail extends Component {
    constructor(props) {
        super()

        this.state = {
            Pat: [],
            NewPat: []
        }
        this.deleteRow = this.deleteRow.bind(this)

    }

    componentDidMount() {
        fetch('/patients')
            .then(res => res.json())
            .then(Pat => this.setState({ Pat }, () => console.log("Patients fetched", Pat)));
    }

    deleteRow(){  
       console.log("worked")
     
    }

    showDetail(res) {
        console.log(this.state.NewPat)
        this.render(this.state.NewPat.map(e => `<div> Name: ${e.name}</div>`))

    }

    render() {


        let data = [];

        if (!data) {
            return null;
        }
        let Count = 0;

        const columns = [
            { Header: "SN", accessor: "sn", width: 50, maxWidth: 50, minWidth: 50, style: { textAlign: "center" } },
            { Header: "Full Name", accessor: "name", style: { textAlign: "center" } },
            { Header: "Date of Birth", accessor: "dob", width: 150, maxWidth: 150, minWidth: 150, style: { textAlign: "center" } },
            { Header: "Residence", accessor: "residence", width: 100, maxWidth: 100, minWidth: 100, style: { textAlign: "center" } },
            { Header: "Phone Number", accessor: "telephone", width: 150, maxWidth: 150, minWidth: 150, style: { textAlign: "center" } },
            { Header: "NHIS ID", accessor: "nhisid", width: 150, maxWidth: 150, minWidth: 150, style: { textAlign: "center" } },
            {
                Header: "Actions",
                Cell: props => {
                    return ( 
                        <Button
                    type = 'submit'
                       
                        onSubmit = { () =>{
                            this.props.history.push('/dashboard/patients/about')
                        }

                        }
                    >View</Button>
                    )
                },
                style: { textAlign: "center" },
                width: 75,
                maxWidth: 75,
                minWidth: 75
            }


        ];
        data = this.state.Pat


        return ( <
            >
            <
            ReactTable data = { data }
            columns = { columns }
            defaultPageSize = { 10 }
            resolveData = { data => data.map(row => row) }
            sortable = { true }
            filterable = { true }


            noDataText = "Please Wait"



            className = "-striped -highlight " /
            >

            <
            h1 > Total patients is { data.length } < /h1>

            { /* <PatientAboutPage patient = {this.state.NewPat}/> */ }

            <
            />
        );
    }
}