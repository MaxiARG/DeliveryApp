const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'appcomida',
})

db.connect(function(err){
    if(err) console.log("error " + err);
    console.log("CONECTADO a MySQL");
})

module.exports = db;
