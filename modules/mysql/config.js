var mysql = require('mysql')
var express = require('express');

let config = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'PRO_db'
})
module.exports = config;