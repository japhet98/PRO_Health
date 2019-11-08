var express = require('express');
var router = express.Router();

var mysql = require('mysql');
var Connections = require('../../modules/mysql/config');

// connect to database;
Connections.connect(err => {
    if (err) {
        console.log("Database not connected")
    } else {
        console.log("Database  connected")
        console.log(Connections.config)

    }
})

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Members' });
});

// router.get('/index/register', function(req, res) {
//     res.render('register')
// })


router.post('/index/register', function(req, res, next) {
    let user = {
        username: req.body.username,
        userpass: req.body.password
    }

    let sql = "CALL AddNewUser(?,?)";
    Connections.query(sql, [req.body.username, req.body.password], (err, rows, field) => {
        if (!err) {
            console.log("User")
        } else
            console.log(err);
    })
    console.log(req.body.username)
    console.log(req.body.password)


});

router.get('/members', function(req, res, next) {
    var SELECT_ALL_FROM_USERS_QUERY = 'SELECT * FROM users';
    Connections.query(SELECT_ALL_FROM_USERS_QUERY, (err, result) => {
        if (err) {
            return res.send(err)
        } else {
            return res.json(result);

        }
    })
})



module.exports = router;