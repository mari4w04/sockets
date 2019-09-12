// const app = require("express")();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// allow to serve static files from here
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/../public/index.html");
});

// query string
// /about?firstName=______&lastName=_________
app.get("/about", (req, res) => {
    res.send(req.query.firstName + " " + req.query.lastName);
});

app.get("/aboutme", (req, res) => {
    const response = {
        firstName: "Anders",
        lastName: "Latif"
    };
    res.json(response);
});

// Request parameter / URL parameter
app.get("/age/:myAge/:height", (req, res) => {
    res.send(req.params.myAge);
});

app.post("/myfavoriteanimal", (req, res) => {
    res.send("Your favorite animal is: " + req.body.favoriteAnimal);
}); 

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server ", error);
    }
    console.log("The server is running on port ", server.address().port);
});