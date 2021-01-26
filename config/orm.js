const connection = require("./connection");

const orm = {

    selectAll: function(table, cb) {

        var queryString = "SELECT * FROM ??";

        connection.query(queryString, [table], function(err, result) {

            if (err) {console.log(err);};

            cb(result);

        });

    },

    insertOne: function(table, column, data, cb) {

        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [table, column, data], function(err, result) {

            if (err) {console.log(err);};
    
            cb(result);

        });

    },

    updateOne: function(table, column, data, column2, data2, cb) {

        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";

        connection.query(queryString, [table, column, data, column2, data2], function(err, result) {

            if (err) {console.log(err);};
    
            cb(result);
            
        });

    }

};

module.exports = orm;