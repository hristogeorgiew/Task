require('dotenv').config();
const mysql = require('mysql');

//configuration database
const con = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: '',
    database: process.env.DB_DATABASE
})

module.exports = con;