import React, { Component } from "react";
import "./App.css";
import QuizBar from "./components/QuizBar";

class App extends Component {
  state = {
    cardStyle: "Random"
  };

  userChoice = cardStyle => {
    this.setState({
      cardStyle
    });
  };

  render() {
    console.log(this.state.cardStyle);

    return (
      <div>
        <h1>App</h1>
        <QuizBar userChoice={this.userChoice} />
      </div>
    );
  }
}

export default App;
