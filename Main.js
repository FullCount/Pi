/**
 * Created by Kevin on 13-1-2016.
 */
var http = require("http");
var eventEmitter = require("events");
var PythonShell = require("python-shell");
var request = require('request');
var cheerio = require('cheerio');


var fs = require("fs");
var App = fs.readFileSync('App.html');

http.createServer(function( request, response)    {
    response.writeHead(200, {"Content-Type": "text/plain"});

    /*
    response.write(PythonShell.run("appStarter.py", function (err) {
        if (err) throw err;
        console.log("finished");
    }));
    */

    response.end("Hello World");
}).listen(8081);
console.log("Server running at http://127.0.0.1:8081/");




/*
 Running a Python script:

 var PythonShell = require('python-shell');

 PythonShell.run('my_script.py', function (err) {
 if (err) throw err;
 console.log('finished');
 });

 https://github.com/extrabacon/python-shell

 */

/*
Creating eventHandler

var connectHandler = function connected()   {
    console.log("connectHandler started");
}

 */

/*
Binding Handler to Event

eventEmitter.on("eventName", eventHandler);

 */

/*
Firing an event

eventEmitter.emit("eventName");

 */
