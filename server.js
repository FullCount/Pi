/**
 * Created by Kevin on 13-1-2016.
 */
var express = require("express");
var serverRoutes = require("./serverRoutes.js");
var server = express();

// Laadt alle bestanden in public/ als html op "/"
server.use("/", express.static("public/"));


// ALLe routes uit "serverRoutes.js" staan op de server bij /data/*
server.use("/data/", serverRoutes);



//Start die server
server.listen(80, function()
{
    // Word uitgevoerd als de server is gestart.
    console.log("Started Express Server on Port: 127.0.0.1:80");
});
