var mysql = require('mysql')
var express = require('express');

let config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'PRO_db'
})
module.exports = config;