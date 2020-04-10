import React, { Component } from "react";
import "./App.css";
import Players from "./components/players";
import Game from "./components/game";

class App extends Component {
  render() {
    
    return (
      <div className="App" style={{ backgroundColor: "" }}>
        <h1 className="letter">TRIS</h1>

        <Players />
        <Game />
      </div>
    );
  }
}

export default App;
