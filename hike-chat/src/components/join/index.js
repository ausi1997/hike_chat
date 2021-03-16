import React, { useState } from "react";
import {Link} from "react-router-dom";

import './index.css';

const JoinRoom = ()=>{
    const [name, setName] = useState('');
    const [room , setRoom] = useState('');
    return(
        <div className="outer">
     <div className="inner">
     <h1 className="heading">Join Room</h1>
     <div><input placeholder="Name" className="joinInput" type="text" onChange = {(event)=>{setName(event.target.value)}}></input></div>
     <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange = {(event)=>{setRoom(event.target.value)}}></input></div>
     <Link onClick={event=>(!name || !room)? event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
     <button className="button mt-20" type="submit">Sign In</button>
     </Link>
     </div>   
        </div>
    )
}

export default JoinRoom;