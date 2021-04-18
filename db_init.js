const mysql = require("mysql");
const config = require("./config");
const con = mysql.createConnection(config.database);

con.connect((error)=>{
    if (error) throw error;
    console.log('connected');

    con.query(

    );
})

//con.end();

/*create table UserTable (
    name varchar(255),
    insertDate datetime default now()
  );*/