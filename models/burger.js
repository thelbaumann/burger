const orm = require("../config/orm");
// let table = "burgers";


var burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(result) {
            cb(result);
        });
    },

    create: function(data, cb) {
        orm.insertOne("burgers", "burger_name", data, function(result) {
            cb(result);
        });
    },

    update: function(data, cb) {
        orm.updateOne("burgers", "devoured", true, "id", data, function(result) {
            cb(result);
        });
    }
};


module.exports = burger;