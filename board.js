import React, { Component } from "react";
import "../App.css";


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="board-row">
          <button id="0" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
          <button id="1" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
          <button id="2" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
        </div>
        <div className="board-row">
          <button id="3" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
          <button id="4" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
          <button id="5" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
        </div>
        <div className="board-row">
          <button id="6" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
          <button id="7" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
          <button id="8" className="grandi" onClick={e => this.props.handleButtonClick(e)} />
        </div>
      </div>
    );
  }
}

export default Board;

