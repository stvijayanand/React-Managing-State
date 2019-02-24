import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // initial state
  constructor(props){
    super(props);

    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

    this.state = {
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: proposedAnswer,
      numQuestions: 0,
      numCorrect: 0
    }
  }
  
  //Reset

  reset = () => {
    this.setState((prevState) => ({
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100), 
      value3: Math.floor(Math.random() * 100)
      })
    );

    this.setState((prevState) => ({
      proposedAnswer : Math.floor(Math.random() * 3) + prevState.value1 
                                                      + prevState.value2 + prevState.value3,
    })
  );
  }

  //True eventhandler
  onTrueResponse = () => {
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
      numCorrect: 
      (prevState.proposedAnswer === (prevState.value1 + prevState.value2 + prevState.value3) 
              ? prevState.numCorrect + 1 : prevState.numCorrect),
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100), 
      value3: Math.floor(Math.random() * 100)
      })
    );

    this.reset();
  }

  //False eventhandler
  onFalseResponse = () => {
    this.setState((prevState) => ({
      numQuestions: prevState.numQuestions + 1,
      numCorrect: 
      (prevState.proposedAnswer === (prevState.value1 + prevState.value2 + prevState.value3) 
              ? prevState.numCorrect : (prevState.numCorrect + 1)),
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100), 
      value3: Math.floor(Math.random() * 100)
      })
    );

    this.reset();
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
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} 
            = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.onTrueResponse}>True</button>
          <button onClick={this.onFalseResponse}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
