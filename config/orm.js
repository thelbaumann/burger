const connection = require("./config/connection");
const express = require('express');
const { query } = require("./connection");

const app = express();

const orm = {

    selectAll: function(table, cb) {

        var queryString = "SELECT * FROM ?";

        connection.query(queryString, [table], function(err, result){

            if (err) throw err;

            cb(result);

        });

    },

    insertOne: function(table, column, data, cb) {

        var queryString = "INSERT INTO ?? (??) VALUES (?)";

        connection.query(queryString, [table, column, data], function(err, result) {

            if (err) throw err;
    
            cb(result);

        });

    },

    updateOne: function(table, column, data, cb) {

        var queryString = "UPDATE INTO ?? (??) VALUES (?)";

        connection.query(queryString, [table, column, data], function(err, result) {

            if (err) throw err;
    
            cb(result);
            
        });

    }

};

module.exports = orm;