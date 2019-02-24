import React, {Component} from "react"

class Game extends Component {

    constructor(props) {
        super(props);

        const question = this.createNewQuestion();

        this.state = {
            value1: question[0],
            value2: question[1],
            value3: question[2],
            proposedAnswer: question[3]
        }
    }

  
   createNewQuestion = () =>{    
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;

    return [value1, value2, value3, proposedAnswer];
   }

  //Reset
  reset = () => {
      const question = this.createNewQuestion();

      this.setState((prevState) => ({
          value1: question[0],
          value2: question[1],
          value3: question[2],
          proposedAnswer: question[3]
      }));
  }

  handleAnswer = (event) => {
    const isAnswerCorrect = this.evaluateAnswer(event.target.id);                            
    this.props.updateScore(isAnswerCorrect); 

    this.reset();
  }

  evaluateAnswer = (selectedButton) => {
      const {value1, value2, value3, proposedAnswer} = this.state;

      return (proposedAnswer === (value1 + value2 + value3) && selectedButton === "trueButton")
      || (proposedAnswer !== (value1 + value2 + value3) && selectedButton === "falseButton");
  }


    render(){
        const {value1, value2, value3, proposedAnswer} = this.state;

        return (<div className="question">
            <div className="equation">
                <p className="text">{`${value1} + ${value2} + ${value3} 
        = ${proposedAnswer}`}</p>
            </div>
            <button id="trueButton" onClick={this.handleAnswer}>True</button>
            <button id="falseButton" onClick={this.handleAnswer}>False</button>
        </div>);
    }
}

export default Game;