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

