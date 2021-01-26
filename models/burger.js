const orm = require("../config/orm");


const burger = {

    selectAll : function(cb) {
        orm.selectAll("burgers", column, data, function(result) {
            cb(result);
        })
    },

    insertOne : function(table, column, data, cb) {
        orm.insertOne("burgers", column, data, function(result) {
            cb(result);
        })
    },

    updateOne : function(table, column, data, cb) {
        orm.updateOne("burger", column, data, function(result) {
            cb(result);
        })
    }
};

// app.get("/", function(req, res) {
//     connection.query("SELECT * FROM burgers;", function(err, data) {
//         if (err) throw err;

//         console.log(data);

//         res.render("index", { burgers: data });

//     });   

// });

// app.post("/", function(req, res) {

//     connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burgerName], function(err, result) {

//         if (err) throw err;

//         console.log("you've added a new burger!");

//         res.redirect("/");
//     });

// });