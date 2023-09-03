import React, { Component } from "react";

export default class RefClassComp extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.batmanRef = React.createRef();
    this.supermanRef = React.createRef();
  }

  changeColor() {
    this.batmanRef.current.style.color = "red";
  }

  changeFont() {
    this.supermanRef.current.style.fontSize = "3rem";
  }

  render() {
    return (
      <div>
        <h1 ref={this.batmanRef}>Batman</h1>
        <button onClick={() => this.changeColor()}>Change Color</button>
        <h1 ref={this.supermanRef}>Superman</h1>
        <button onClick={() => this.changeFont()}>Change Font</button>
      </div>
    );
  }
}
