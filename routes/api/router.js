const express = require('express');
const router = express.Router();
const moment = require("moment");
const mysql = require("mysql");
const config = require("../../config");
const con = mysql.createConnection(config.database);


router.get('/', (req,res) => {
    res.send('<h1>hello</h1>');
})

router.post('/', (req,res)=>{

    newAdd ={
        name: req.body.name
    }
    
        const query = "INSERT INTO UserTable (name) VALUES (?)";
        con.query(query, newAdd.name,(err)=>{
            if(err) throw err;
            console.log('record inserted');
        })


    

    console.log(newAdd);
    res.redirect('/');

})

module.exports = router;