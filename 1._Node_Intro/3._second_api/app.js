// const app = require("express")();
const express = require("express");
const app = express();

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

// Request parameter / URL parameter
app.get("/age/:myAge/:height", (req, res) => {
    res.send(req.params.myAge);
});


const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server ", error);
    }
    console.log("The server is running on port ", server.address().port);
});