import React from "react";
import {BrowserRouter as  Router , Route} from "react-router-dom";
import JoinRoom from "./components/joinroom";
import ChatRoom from "./components/chatRoom";
import './App.css';

function App() {
  return (
    <Router>
    <Route path="/" exact component={JoinRoom}></Route>
    <Route path="/chat" component={ChatRoom}></Route>
    </Router>
  );
}

export default App;
