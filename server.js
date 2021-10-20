
//setting up server
const express = require("express");
const fs = require("fs")
const database = require("./db/db.json")

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//root route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//notes route
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});





























app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});