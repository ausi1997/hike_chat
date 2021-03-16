import React from 'react';
import './index.css';
import onlineicon from '../../onlineIcon.png';
import closeicon from '../../closeIcon.png';
const Info = ({room})=>{
    return(
        <div className="infoBar">
        <div className="leftContainer">
        <img className="icon" src={onlineicon}></img>
        <h3>{room}</h3>
        </div>
        <div className="rightContainer">
        <a href="/"> <img src={closeicon} ></img></a>
        </div>
        </div>
    )
}
export default Info;