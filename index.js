const express=require('express');
const socket = require('socket.io');
var app=express();  

var server=app.listen(4000,function(){
    console.log("listening to Port 4000");
});

app.use(express.static("Public"));
var upgradedserver = socket(server);

upgradedserver.on("connection",function(socket){
    console.log("WebSocket Connected",socket.id);});