import React, { Component} from "react";
import Board from "./board";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsTheNext: true,
      mosseX: [],
      mosseY: [],
      numeroMosse: 0,
      winner: "",
    };
  }

  ButtonClick = (e) => {
    e.preventDefault();
    this.setState(
      {
        numeroMosse: this.state.numeroMosse + 1,
      },
      () => {
        console.log("sto aggiornando numero Mosse");
      }
    );

    if (
      document.getElementById(e.target.id).textContent === "" &&
      this.state.winner === ""
    ) {
      if (this.state.xIsTheNext === true) {
        document.getElementById(e.target.id).textContent = "X";
        const a = e.target.id;
        this.setState(
          (prevState) => {
            return {
              xIsTheNext: false,
              mosseX: prevState.mosseX.concat(a).sort(),
            };
          },
          () => {
            if (this.calculateWinner(this.state.mosseX) === true) {
              this.setState(
                (prevState) => {
                  return {
                    winner: "X",
                  };
                },
                () => {
                  let newElem = document.createElement("h1");
                  newElem.textContent = "Gioco Terminato";
                  let disp = document.getElementById("afterBoard");
                  disp.appendChild(newElem);
                }
              );
            }
          }
        );
      } else {
        document.getElementById(e.target.id).textContent = "O";
        const b = e.target.id;
        this.setState(
          (prevState) => {
            return {
              xIsTheNext: true,
              mosseY: prevState.mosseY.concat(b).sort(),
            };
          },
          () => {
            if (this.calculateWinner(this.state.mosseY) === true) {
              this.setState(
                (prevState) => {
                  return {
                    winner: "Y",
                  };
                },
                () => {
                  let newElem = document.createElement("h1");
                  newElem.textContent = "Gioco Terminato";
                  let disp = document.getElementById("afterBoard");
                  disp.appendChild(newElem);
                }
              );
            }
          }
        );
      }
    }
    

    if (this.state.numeroMosse >= 8 && this.state.winner === "") {
      console.log("Non ha vinto nessuno");
      let newElement = document.createElement("h1");
      newElement.textContent = "Non ha vinto nessuno dei due";
      let disp = document.getElementById("afterBoard");
      disp.appendChild(newElement);
    }
  };

  calculateWinner = (mosse) => {
    const linesToWin = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    function merge(data = []) {
      return data.join("-");
    }
    // For testing
    // const mosseX = merge(this.state.mosseX);
    mosse = merge(mosse);
    return linesToWin.some((line) => merge(line) === mosse);
  };

  render() {
    return (
      <div style={{ marginTop: "50px" }}>
        <Board handleButtonClick={(e) => this.ButtonClick(e)} />
        <div id="afterBoard" />
      </div>
    );
  }
}

export default Game;
