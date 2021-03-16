import React, {useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

let socket;
const ChatRoom = ({location})=>{
    
    const [name, setName] = useState('');
    const [room , setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
    const {name , room}= queryString.parse(location.search);

    socket = io("localhost:6000");
    setName(name);
    setRoom(room); 
  //  console.log(socket);
socket.emit("join", {name,room},({error})=>{
    alert(error);
});
return ()=>{
    socket.emit('disconnect');

    socket.off();
}
    },["localhost:6000", location.search]);

    useEffect(()=>{
        socket.on('message', ()=>{
         setMessages([...messages,message]);
        })
    },[messages]);

    // function to send messages

    
    return(
        <h1>Chat</h1>
    )
}

export default ChatRoom;