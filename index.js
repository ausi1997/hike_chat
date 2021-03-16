// init  code
// importing the required modules
const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const {addUser,removeUser,getUser,getUserInRoom} = require('./user');

const router = require('./router');

// making an express app
const app = express();

// creating a http server
const server = http.createServer(app);

// creating a socketio server
const io = socketio(server);

// setting up a new socket connection
io.on("connection" , (socket)=>{
 console.log("New Connection...");

 socket.on("join" , ({name,room}, callback)=>{
     const {error , user } = addUser({id:socket.id , name ,room});

     if(error){
         return callback(error);
     }
       socket.emit('message', {user:'admin', text:`${user.name} Welcome to the room ${user.room}`});
       socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${user.name} has joined`});   

         socket.join(user.room);

         callback();
 });
socket.on('sendMessage', (message,callback)=>{
    const user = getUser(socket.io);

    io.to(user.room).emit('message', {user:user.name , text:message});

    callback();
    
})

 socket.on("disconnect" ,()=>{
     console.log("Disconnected");
 })
});

// middleware
app.use(router);


//  assining the port
const PORT = process.env.PORT || 6000
server.listen(PORT, ()=>{
    console.log(`server has been started on port 6000`);
})