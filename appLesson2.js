/**
 * Created by moham on 10/19/2016.
 */
var http = require("http");
var express = require("express");
var morgan = require("morgan");

var app = express();


app.use(morgan('you access localhost'));


app.all("*", function(request, response, next){
    response.writeHead(200,{"Content-Type":"text/plain"});
    next();
});

app.get("/", function(request, response){
    response.end("Welcome to the homepage");
    response.redirect("/about");
});

app.get("/about", function(request,response){
    response.end("Welcome to the about page");
});


app.get("*", function(request, response){

    response.end("404! Page not found");

});


http.createServer(app).listen(5555);


console.log("Server running at localhost.....");