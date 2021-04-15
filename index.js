const express = require("express");
const moment = require("moment");
const mysql = require("mysql");
const config = require("./config");

//console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

app = express(); //server

//Middleware and api
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/request', require('./routes/api/router'));

const con = mysql.createConnection(config.database);

con.connect((err)=>{
    if(err) throw err
    console.log("Connected to database");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });

})






//server listener
app.listen(config.PORT, () =>
console.log(
    `Server started on port ${config.PORT} at ${moment().format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
    )}`
    ));
