import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
function Table(){
let data=[];

    if (!data) {
        return null;
    }
   const  columns=[
       { Header:"First Name" ,accessor:"firstname" }, { Header:"Phone Number" ,accessor:"phonenumber" }, { Header:"Email" ,accessor:"email" }
    ];
   data=[
       
    ]


    return(
        <ReactTable
       data ={data}
       columns={columns}
       defaultPageSize={2}
       resolveData={data=> data.map(row => row)}
       sortable={true}
       filterable={true}
            className="-striped -highlight"
        />
    )
}

export default Table;