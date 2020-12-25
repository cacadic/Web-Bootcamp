const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res){
    res.send("Contact me at: phamviethonglinh@gmail.com");
});

app.get("/about", function(req, res){
    res.send("My name is Linh Pham");
});

app.get("/hobbies", function(req, res){
    res.send("Coffee, beer");
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
});