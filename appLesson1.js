/**
 * Created by moham on 10/19/2016.
 */
var http = require("http");
var http = require("express");
var answer = "";
var app = http.createServer(function (request, response) {

    answer += "UR is :" + request.url + "" +"\n";
    answer += "Type: " + request.method + "\n";
    answer += "headers: " + JSON.stringify(request.headers) + "\n";

    if(request.url == "/"){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.end("WellCome to the MainPage");
    }
    else if(request.url =="/kill"){
        response.writeHead(200, {"Content-Type":"text/plain"});
        response.end("Aha! wellCome to kill page");
    }

    else{
        response.writeHead(404, {"Content-Type":"text/plain"});
        response.end("Ach so! Page not Found");

    }
    response.end(answer);

});

app.listen(5555,"localhost");
console.log("Server running at localhost.....");