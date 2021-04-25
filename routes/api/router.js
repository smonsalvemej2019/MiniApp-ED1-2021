const express = require('express');
const router = express.Router();
const moment = require("moment");

router.get('/', (req,res) => {
    res.send('<h1>hello</h1>');
})

router.post('/', (req,res)=>{

    newAdd ={
        name: req.body.name
    }

    console.log(newAdd);
    res.redirect('/');

})

module.exports = router;