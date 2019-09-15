var orm = require("../config/orm.js");

var burger = {
    all: function(callBack) {
        orm.selectAll("burgers", function(res) {

            console.log("");
            console.log("Burger.JS-selectAll");
            console.log("res: " + JSON.stringify(res));
            console.log("");

            callBack(res);
        });
    },
    create: function(newBurger, values, callBack) {
        orm.insertOne("burgers", newBurger, values, function(res) {

            console.log("");
            console.log("Burger.JS-insertOne");
            console.log("newBurger: " + newBurger);
            console.log("res: " + JSON.stringify(res));
            console.log("");

            callBack(res);
        });
    },
    update: function(column, id, callBack) {
        orm.updateOne("burgers", column, id, function(res) {

            console.log("");
            console.log("Burger.JS-updateOne");
            console.log("column: " + JSON.stringify(column));
            console.log("id: " + id);

            console.log("res: " + JSON.stringify(res));
            console.log("");

            callBack(res);
        });
    }
};

module.exports = burger;