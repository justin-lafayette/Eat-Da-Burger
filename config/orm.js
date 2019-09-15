const connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callBack) {
        var queryString = "SELECT * FROM " + table + ";";

        connection.query(queryString, function(err, results) {

            if( err ) throw err;

            console.log(JSON.stringify(results));

            callBack(results);
        });
    },
    insertOne: function(table, burger, callBack) {
        var queryString = "INSERT INTO ?? VALUES (??)"

        connection.query(queryString, [table, burger], function(err, results) {

            if( err ) throw err;

            console.log(JSON.stringify(results));
            callBack(results);
        });
    },
    updateOne: function(table, column, id, callBack) {
        var queryString = "UPDATE ?? SET devoured=true WHERE ?? = ?";

        connection.query(queryString, [column, table, id, id], function(err, results) {

            console.log(JSON.stringify(results));
            callBack(results);
        });
    }
};

module.exports = orm;