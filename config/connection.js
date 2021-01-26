const mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localHost',
  
    port: 3306,
  
    user: 'root',
  
    password: 'root',
  
    database: 'burgers_db'
  });


module.exports = connection;
