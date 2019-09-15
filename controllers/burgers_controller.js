const express = require("express");

// Router is used to chain together route handlers
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(dbData) {
        var burgerObj = {
            burgers: dbData
        };

        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "name"
    ], 
    [
        req.body.name
    ], 
    function(result) {

        res.json({ id: result.insertId });
    });
});

router.put("api/burgers/:id", function(req, res) {
    var condition = "id = " +req.params.id;

    console.log("condition = ", condition);

    burger.update({
        devoured: req.body.devoured
    },
    condition, function(result) {
        if( result.changedRows == 0) {
            
            return res.status(404).end();
        
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;