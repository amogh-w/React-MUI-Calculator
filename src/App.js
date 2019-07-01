import React, { Component } from "react";
import Header from "./components/Header";
import Calculator from "./components/Calculator";
import * as math from "mathjs";

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

  equal = () => {
    try {
      this.setState({
        result: math.evaluate(this.state.result)
      });
    } catch (e) {
      console.log(e);
    }
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
          equal={this.equal}
        />
      </React.Fragment>
    );
  }
}
