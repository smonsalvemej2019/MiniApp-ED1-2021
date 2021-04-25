const mysql = require("mysql");
const config = require("./config");
const PreCon = mysql.createConnection(config.predatabase);
const con = mysql.createConnection(config.database);

let dataSetUp = new Promise((tryNext)=>
{
PreCon.connect((err)=>{
    try{
    if (err) throw err;
    console.log('Connected');

    PreCon.query("CREATE DATABASE my_db", (err,result) =>{
        try{
        if (err) throw err;
        console.log('Database created');
        }catch(err){
            console.log('Database already exists');
        }
    })
}catch(err){
    console.log('unable to connect');
}finally{
    PreCon.end();
}
});
tryNext();
})

dataSetUp.then(()=>
{
con.connect((err)=>{
    try{
        if (err) throw err;
        const tableCreate = "CREATE TABLE UserTable (name varchar(255),insertDate datetime default now())"
        con.query(tableCreate, (err)=>{
            try{
                if (err) throw err;
                console.log('Table created');
            }catch(err){
                console.log('Table already exist');
            }
        })
    }catch(err){
        console.log(err);
    }finally{
        con.end();
    }
});
})
