const express = require("express");
// const connection = require("./config/connection.js");
const exphbs = require("express-handlebars");

const app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});