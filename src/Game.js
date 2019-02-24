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

  //True eventhandler
  onTrueResponse = () => {
    const countCorrect = (this.state.proposedAnswer === (this.state.value1 + this.state.value2 + this.state.value3) 
                            ? this.props.numCorrect + 1 : this.props.numCorrect);
    this.props.updateScore(this.props.numQuestions +1
                                , countCorrect);  
    this.reset();
  }

  //False eventhandler
  onFalseResponse = () => {
    const countCorrect = (this.state.proposedAnswer === (this.state.value1 + this.state.value2 + this.state.value3) 
        ? this.props.numCorrect : this.props.numCorrect + 1);
    this.props.updateScore(this.props.numQuestions +1
            , countCorrect);

    this.reset();
  }


    render(){
        return (<div className="question">
            <div className="equation">
                <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} 
        = ${this.state.proposedAnswer}`}</p>
            </div>
            <button onClick={this.onTrueResponse}>True</button>
            <button onClick={this.onFalseResponse}>False</button>
        </div>);
    }
}

export default Game;