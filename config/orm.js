const connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callBack) {
        var queryString = "SELECT * FROM " + table + ";";

        console.log("");
        console.log("ORM-selectAll");
        console.log("ORM-table: " + table);

        connection.query(queryString, function(err, results) {

            if( err ) throw err;

            console.log("ORM-results: " + JSON.stringify(results));
            console.log("");

            callBack(results);
        });
    },
    insertOne: function(table, newBurger, values, callBack) {
        var queryString = "INSERT INTO ?? (" + newBurger + ") VALUES ('" + values + "');";

        console.log("");
        console.log("ORM-insertOne");
        console.log("ORM-table: " + table);
        console.log("ORM-newBurger: " + newBurger);
        console.log("ORM-values: " + values);

        connection.query(queryString, [table], function(err, results) {
            
            console.log("ORM-QueryString: " + queryString, [table, newBurger, values]);
            console.log("ORM-results: " + JSON.stringify(results));
            console.log("");

            if( err ) throw err;

            callBack(results);
        });
    },
    updateOne: function(table, column, id, callBack) {
        var queryString = "UPDATE ?? SET devoured = true WHERE " + id;

        console.log("");
        console.log("ORM-updateOne");
        console.log("ORM-table: " + table);
        console.log("ORM-column: " + JSON.stringify(column));
        console.log("ORM-id: " + id);

        connection.query(queryString, [table], function(err, results) {
            
            console.log("QueryString: " + queryString);
            console.log("ORM-results: " + results);
            console.log("ORM-results: " + JSON.stringify(results));
            console.log("");

            callBack(results);
        });
    }
};

module.exports = orm;