import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Sami",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        firstName: "Luffi",
      });
    }, 1000);
  }

  render() {
    console.log("Parent");
    return (
      <div>
        <MemoComp firstName={this.state.firstName} />
      </div>
    );
  }
}

export default ParentComp;
