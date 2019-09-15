const express = require("express");

// Router is used to chain together route handlers
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {

    console.log("");
    console.log("Burger_Controller-router.get");

    burger.all(function(dbData) {
        var burgerObj = {
            burgers: dbData
        };

        console.log("dbData: " + JSON.stringify(dbData));
        console.log("burgerObj: " +  JSON.stringify(burgerObj));
        console.log("");

        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res) {

    console.log("");
    console.log("Burger_Controller-router.post");

    burger.create([
        "name"
    ], 
    [
        req.body.name
    ], 
    function(result) {

        console.log("Req.body.name: " + req.body.name);
        console.log("Result: " + result);
        console.log("");

        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("");
    console.log("Burger_Controller-router.put");
    console.log("condition = "+ condition);

    burger.update({
        devoured: req.body.devoured
    },
    condition, function(result) {

        console.log("Req.body.devoured: " + req.body.devoured);
        console.log("Result: " + result);
        console.log("");

        if( result.changedRows == 0) {
            
            return res.status(404).end();
        
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;