var orm = require("../config/orm.js");

var burger = {
    all: function(callBack) {
        orm.selectAll("burgers", function(res) {

            console.log(JSON.stringify(res));
            callBack(res);
        });
    },
    create: function(newBurger, callBack) {
        orm.insertOne("burgers", newBurger, callBack, function(res) {

            console.log(JSON.stringify(res));
            callBack(res);
        });
    },
    update: function(column, id, callBack) {
        orm.updateOne("burgers", column, id, function(res) {

            console.log(JSON.stringify(res));
            callBack(res);
        });
    }
};

module.exports = burger;