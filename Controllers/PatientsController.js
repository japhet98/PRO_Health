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
router.get('/', function(req, res, next) {
    var SELECT_ALL_FROM_PATIENTS_QUERY = 'SELECT * FROM allpatients';
    Connections.query(SELECT_ALL_FROM_PATIENTS_QUERY, (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(result);
        }
    })
})
router.get('/:id', function(req, res, next) {

        var SELECT_SPECIFIC_FROM_PATIENTS_QUERY = 'SELECT * FROM allpatients where nhisid = ? '
        Connections.query(SELECT_SPECIFIC_FROM_PATIENTS_QUERY, req.params.id, (err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json(result);
            }
        })
    })
    // getting the medical detail of a specific patient
router.get('/medical-detail/:id', function(req, res, next) {
    var SELECT_PATIENTS_MEDICAL_DETAIL = 'SELECT p.name,p.dob,p.telephone,p.residence,pm.medicalreport,pm.dateissued,p.nhisid from patients p INNER join patientsmedicals pm on p.nhisid = pm.nhisid WHERE p.nhisid =?'

    Connections.query(SELECT_PATIENTS_MEDICAL_DETAIL, [req.params.id], (err, result) => {
        if (err) {
            return res.send(err);
        } else {
            return res.json(result);
        }
    })
})

// edit the medical detail of a specific patient if null
router.get('/medical-detail/:id/edit', function(req, res, next) {
        report = req.body.medicalreport;
        var UPDATE_PATIENTS_MEDICAL_DETAIL = 'CALL UpdateMedicalDetail(?,"Night Blindness") '

        Connections.query(UPDATE_PATIENTS_MEDICAL_DETAIL, [req.params.id], (err, result) => {
            if (err) {
                return res.send(err);
            } else {
                return res.json(result);
            }
        })
    })
    // Add to patients Table
router.post('/patients', function(req, res, next) {
    let user = {
        name: req.body.name,
        dob: req.body.dob,
        telephone: req.body.telephone,
        residence: req.body.residence,
        nhisid: req.body.nhisid
    }
    var INSERT_INTO_PATIENTS_QUERY = "call addPatient(?????)";
    Connections.query(INSERT_INTO_PATIENTS_QUERY, [user.name, user.dob, user.telephone, user.residence, user.nhisid], (err, row, field) => {
        if (!err) {
            console.log("Patients table affectd");
        } else {
            console.log(err);
        }
    })

})

router.put('/patients', function(req, res, next) {
    let user = {
        name: req.body.name,
        dob: req.body.dob,
        telephone: req.body.telephone,
        residence: req.body.residence

    }
    var UPDATE_PATIENTS_QUERY = "UPDATE patients SET name = ? dob =? telephone =? residence =? WHERE id = ? ;"
    Connections.query(UPDATE_PATIENTS_QUERY, [user.name, user.dob, user.telephone, user.residence], (err, row, field) => {
        if (!err) {
            console.log("Patients table updated");
        } else {
            console.log(err);
        }
    })
})




module.exports = router;