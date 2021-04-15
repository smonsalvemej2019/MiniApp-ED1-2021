const express = require("express");
const moment = require("moment");
const mysql = require("mysql");
const config = require("./config");
var exphbs  = require('express-handlebars');

//console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

app = express(); //server

//Middleware and api
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/request', require('./routes/api/router'));

const con = mysql.createConnection(config.database);

/*con.connect((err)=>{
    if(err) throw err
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(JSON.stringify(result));
    });

})*/

console.log(exphbs);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/',(req,res)=>res.render('home',{
    title: "Switch The Light",
}));


//server listener
app.listen(config.PORT, () =>
console.log(
    `Server started on port ${config.PORT} at ${moment().format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
    )}`
    ));
