import React, {useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import './index.css';
import Info from "../info";

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
  const sendMessage = (event)=>{
  event.preventDefault();

     if(message){
         socket.emit('sendMessage', message , ()=>{setMessage('')});
     }
  }
  console.log(message,messages);
    
    return(
        <div className="outerContainer">
        <div className="container">
        <Info room={room}></Info>

        <input value={message} onChange = {(event)=>{setMessage(event.target.value)}}
         onKeyPress= {event=>event.key === 'Enter' ? sendMessage(event): null}></input>
        </div>
        </div>
    )
}

export default ChatRoom;