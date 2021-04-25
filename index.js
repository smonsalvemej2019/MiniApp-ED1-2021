const express = require("express");
const moment = require("moment");
const mysql = require("mysql");
const config = require("./config");
var exphbs  = require('express-handlebars');
const path = require('path');

//console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));

app = express(); //server
app.use(express.static(path.join(__dirname, '/public')));
//Middleware and api
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/request', require('./routes/api/router'));

const con = mysql.createConnection(config.database);


console.log(exphbs);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.get('/',(req,res)=>{
    

        const query = "SELECT * FROM `UserTable` ORDER BY insertDate DESC LIMIT 5";
        con.query(query, (err,result)=>{
            try{
            if(err) throw err;
            console.log(JSON.stringify(result));
            res.render('home',{title: "Switch The Light", results:result});
            }catch(err){
                result = {name:"Error", insertDate:"Please Check Database"};
                res.render('home',{title: "Switch The Light", results:result});
            }
        })

//res.render('home',{title: "Switch The Light", data:results});
    
    

});


//server listener
app.listen(config.PORT, () =>
console.log(
    `Server started on port ${config.PORT} at ${moment().format(
    "dddd, MMMM Do YYYY, h:mm:ss a"
    )}`
    ));
