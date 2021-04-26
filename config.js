const config ={
    PORT: process.env.PORT,
    predatabase:{
        host: 'localhost',
        user: 'root'
    },
    database:{
        host: 'localhost',
        user: 'root',
        database: 'my_db'
    }
}

module.exports = config;