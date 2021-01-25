const mysql = require("mysql");

module.exports = mysql.createConnection({
    host: 'localHost',
  
    port: process.env.PORT || 3306,
  
    user: 'root',
  
    password: 'root',
  
    database: 'burgers_db'
  });