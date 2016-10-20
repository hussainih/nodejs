/**
 * Created by moham on 10/19/2016.
 */
var http = require("http");
var express = require("express");


var app = express();

app.set("views", __dirname + "/views");

app.set("view engine", "pug");

app.get("/", function(request, response){
    response.render("index", {message: " I love you"});
});

http.createServer(app).listen(5555);


console.log("Server running at localhost.....");