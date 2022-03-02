import React from "react";
export default class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { bootcamp: "Rookies" };
  // }
  render() {
    return <h2>Welcome to {this.props.bootcamp}</h2>;
  }
}
