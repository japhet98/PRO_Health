import React, { Component } from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import Axios from 'axios';

export default class PatientMedicalReport extends Component {
    constructor() {
        super()

        this.state = {
            Pat: []
        }

    }

    componentDidMount() {
        fetch('/patients/medical-detail/:id')
            .then(res => res.json())
            .then(Pat => this.setState({ Pat }, () => console.log("Patients fetched", Pat)));
    }

    render() { 

       
        let data = [];

        if (!data) {
            return null;
        }
        let Count = 0;

        const columns = [
            { Header: "SN", accessor: "count" },
            { Header: "Diagnose", accessor: "diagnose" },
            { Header: "Diagnose", accessor: "altdiagnose" },
            { Header: "Doctor Name", accessor: "doctor" },
            { Header: "POD Examination", accessor: "podexams" },
            { Header: "Medication ID", accessor: "medicationid" },
            { Header: "NHIS ID", accessor: "nhisid" },
            { Header: "Date of Issue", accessor: "dateofissue" }

        ];

        return ( 
            <>
                <ReactTable
                    data={data}
                    columns={columns}
                    defaultPageSize={10}
                    resolveData={data => data.map(row => row)}
                    sortable={true}
                    filterable={true}



                    className="-striped -highlight "
                />
                   
            </>
         );
    }
}
 



