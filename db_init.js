const mysql = require("mysql");
const config = require("./config");
const PreCon = mysql.createConnection(config.predatabase);
const con = mysql.createConnection(config.database);

PreCon.connect((err)=>{
    try{
    if (err) throw err;
    console.log('Connected');

    con.query("CREATE DATABASE my_db", (err,result) =>{
        try{
        if (err) throw err;
        console.log('Database created')
        }catch(err){
            console.log('Database already exists')
        }
    })
}catch(err){
    console.log('unable to connect');
}finally{
    PreCon.end();
}
});

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
    }finally{
        con.end();
    }
});