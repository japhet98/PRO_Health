var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var Connections = require('../modules/mysql/config');
// connect to database;
Connections.connect(err => {
    if (err) {
        console.log("Database not connected")
    } else {
        console.log("Database  connected")
        console.log(Connections.config)

    }
})


// Get all patients
router.get('/nurse', function(req, res, next) {
        var SELECT_ALL_FROM_PATIENTS_QUERY = 'SELECT * FROM patientdetail';
        Connections.query(SELECT_ALL_FROM_PATIENTS_QUERY, (err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json(result);
            }
        })
    })
    // Add to patients Table
router.post('/nurse', function(req, res, next) {
    var INSERT_INTO_PATIENTS_QUERY = "";
    Connections.query(INSERT_INTO_PATIENTS_QUERY, [], (err, row, field) => {
        if (!err) {
            console.log("Patients table affectd");
        } else {
            console.log(err);
        }
    })

})

router.put('/nurse', function(req, res, next) {
    var UPDATE_PATIENTS_QUERY = "";
    Connections.query(UPDATE_PATIENTS_QUERY, [], (err, row, field) => {
        if (!err) {
            console.log("Patients table updated");
        } else {
            console.log(err);
        }
    })
})




module.exports = router;