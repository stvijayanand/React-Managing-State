import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from "./Game"
import Score from "./Score.js"

class App extends Component {
  // initial state
  state = {
    numQuestions: 0,
    numCorrect: 0
  }

  updateScore = (numQuestions, numCorrect) => {
    this.setState((prevState) => ({
      numQuestions: numQuestions,
      numCorrect: numCorrect
      })
    );
  }
  
  render() {  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <Game 
            updateScore={this.updateScore}
            numCorrect={this.state.numCorrect}
            numQuestions={this.state.numQuestions}>></Game>
          <Score
            numCorrect={this.state.numCorrect}
            numQuestions={this.state.numQuestions}></Score>
        </div>
      </div>
    );
  }
}

export default App;
