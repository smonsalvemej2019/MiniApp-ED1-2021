const express = require('express');
const router = express.Router();
const moment = require("moment");

router.get('/', (req,res) => {
    res.send('<h1>hello</h1>');
})

router.post('/', (req,res)=>{

    newAdd ={
        name: req.body.name,
        time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
    }

    console.log(newAdd);
    if(!newAdd.name){
        return res.status(400).json({msg: 'please input a name'})
    }

    res.json(newAdd);

})

module.exports = router;