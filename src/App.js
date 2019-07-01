import React, { Component } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      result: "mango"
    };
  }

  addToResult = val => {
    this.setState({
      result: this.state.result + val
    });
  };

  clear = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Calculator
          resultLabel={this.state.result}
          addToResult={this.addToResult}
          clear={this.clear}
        />
      </React.Fragment>
    );
  }
}
