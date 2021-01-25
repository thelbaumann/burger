const express = require("express");
const connection = require("./config/connection");

const app = express();

connection.connect((err) => {

    if (err) throw err;
  
    console.log(`Successfully connected on ${connection.config.port}`);

});