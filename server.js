const express = require('express');
const app = express();

app.get("/", function (req, res) {
    res.send("HELLO WORLD!");
});

app.get("/myname", function (req, res) {
    res.send("My Name Is Won Maung Thein");
});

app.get("/node", function (req, res) {
    res.send("This is the exercise of studying NODE. THIS IS AWESOME PROGRAM");
});

app.get("/girls", function (req, res) {
    res.send("<h1>I have a lot of friends they are girls.</h1> <h2> Some of them are really kind</h2>");

});



app.listen(3000, function () {
    console.log("Server is up")
});