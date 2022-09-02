const express = require('express');
const connection = require("./connection");
const employeeRoute = require("./routes/employee");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/employee',employeeRoute)

module.exports = app;