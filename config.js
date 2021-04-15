const config ={
    PORT: 5000 || process.env.PORT,
    database:{
        host: 'localhost',
        user: 'root',
        database: 'my_db'
    }
}

module.exports = config;