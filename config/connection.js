const mysql = require("mysql");

var connection = mysql.createConnection({
    host: 'localHost',
  
    port: 3306,
  
    user: 'root',
  
    password: 'root',
  
    database: 'burgers_db'
  });

  connection.connect((err) => {

    if (err) {
        console.log(err);
        return;
    }
  
    else {
        console.log(`Successfully connected on ${connection.config.port}`);
    }
    
});


module.exports = connection;
