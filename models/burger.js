var orm = require("../config/orm.js");

var burger = {
    all: function(callBack) {
        orm.selectAll("burgers", function(res) {

            console.log("");
            console.log("Burger.JS");
            console.log("Select all: " + JSON.stringify(res));
            console.log("");

            callBack(res);
        });
    },
    create: function(newBurger, callBack) {
        orm.insertOne("burgers", newBurger, callBack, function(res) {

            console.log("");
            console.log("Burger.JS")
            console.log("Insert one: " + JSON.stringify(res));
            console.log("");

            callBack(res);
        });
    },
    update: function(column, id, callBack) {
        orm.updateOne("burgers", column, id, function(res) {

            console.log("");
            console.log("Burger-column: " + JSON.stringify(column));
            console.log("Burger-id: " + id);

            console.log('Update one: ' + JSON.stringify(res));
            console.log("");

            callBack("buger-res: " + res);
        });
    }
};

module.exports = burger;