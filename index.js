// init  code
// importing the required modules
const express = require("express");
const socketio = require("socket.io");
const http = require("http");

// making an express app
const app = express();

// creating a http server
const server = http.createServer(app);

// creating a socketio server
const io = socketio(server);


//  assining the port
const PORT = process.env.PORT || 6000
server.listen(PORT, ()=>{
    console.log(`server has been started on port 6000`);
})