// Require express
const express = require("express");

// Set port to dynamically grab or to static
const PORT = process.env.PORT || 8080;

// Set express to variable
const app = express();

// Set folder to be shown in html
app.use(express.static("public"));

// Set application to be parsed into JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars to a variable
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {

    console.log("Listening on: ", PORT);
})