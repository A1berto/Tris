import React, { Component } from "react";
class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pla1: "",
      pla2: "",
      showIt: true,
    };
  }

  handleSubmit = (event) => {
    const inputName = event.target.value;
    if (event.target.id === "play1") {
      this.setState({
        pla1: inputName,
      });
    } else {
      this.setState({
        pla2: inputName,
      });
    }
  };

  handleStartGame = () => {
    if (this.state.pla1 === "" || this.state.pla2 === "") {
      var newElement = document.createElement("h1");
      newElement.textContent = "Iniziamo a giocare!";
      var disp = document.getElementById("divvo");
      disp.appendChild(newElement);
      console.log(newElement);
      this.setState({
        showIt: !this.state.showIt,
      });
    } else {
      var newEl = document.createElement("h1");
      newEl.textContent =
        this.state.pla1 + " e " + this.state.pla2 + ", iniziamo a giocare!";
      var dis = document.getElementById("divvo");
      dis.appendChild(newEl);
      console.log(newEl);
      this.setState({
        showIt: !this.state.showIt,
      });
    }
  };

  render() {
    return (
      <div id="divvo">
        {this.state.showIt ? (
          <form id="formina" onSubmit={this.handleSubmit}>
            <input
              id="play1"
              style={{ justifyContent: "center-center" }}
              type="text"
              value={this.state.pla1}
              onChange={this.handleSubmit}
              placeholder=" PLAYER 1"
            />
            <input
              style={{ justifyContent: "center-center" }}
              className="button1"
              type="button"
              value="Start Game!"
              onClick={this.handleStartGame}
            />
            <input
              id="play2"
              className="alcentro"
              style={{ justifyContent: "center-center"}}
              type="text"
              value={this.state.pla2}
              onChange={this.handleSubmit}
              placeholder="PLAYER 2 "
            />
          </form>
        ) : null}
      </div>
    );
  }
}

export default Players;

/*
class Form extends React.component{
  constructor(){
    super()
     this.state={
      name: ""
     }
  }
  nameChange(event){
   const inputName = event.target.value
    this.setState({
      name: inputName
    })
  }
  render(){
    return(
     <div>
      <form>
        <label>Name:</label>
        <input type="text" value={this.state.name} onChange=
        {this.nameChange.bind(this)}/>
        <input type="submit"/>
      </form>
     </div>
    )
   }
 }
 */
