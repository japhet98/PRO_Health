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
router.get('/:id', function(req, res, next) {
        var SELECT_ALL_FROM_DOCTOR_QUERY = 'select * from doctor where userpass =?';
        Connections.query(SELECT_ALL_FROM_DOCTOR_QUERY, req.params.id, (err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json(result);
            }
        })
    })
    // Add to patients Table
router.get('/', function(req, res, next) {
    var SELECT_ALL_FROM_DOCTOR_QUERY = 'select * from doctor ';
    Connections.query(SELECT_ALL_FROM_DOCTOR_QUERY, (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(result);
        }
    })
})

router.get('/:name/:id/', function(req, res, next) {
    var SELECT_ALL_FROM_DOCTOR_QUERY = 'select * from doctor where username =? and userpass =? ';
    Connections.query(SELECT_ALL_FROM_DOCTOR_QUERY, [req.params.name, req.params.id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(result);
        }
    })
})

router.post('/', function(req, res, next) {

    name = req.body.name,
        telephone = req.body.telephone,
        dob = req.body.dob,
        email = req.body.email,
        username = req.body.username,
        userpass = req.body.userpass,
        residence = req.body.residence,
        hospital = req.body.hospital


    var INSERT_INTO_PATIENTS_QUERY = "INSERT INTO doctor( name, dob, username, userpass, email, telephone, residence, hospital)  values(?,?,?,?,?,?,?,?) ";
    Connections.query(INSERT_INTO_PATIENTS_QUERY, [name, dob, username, userpass, email, telephone, residence, hospital], (err, row, field) => {
        if (!err) {
            console.log("Doctor table affected");
        } else {
            console.log(err);
        }
    })

})

router.put('/update', function(req, res, next) {
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