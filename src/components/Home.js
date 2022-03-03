import React from "react";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootcamp: "Rookies",
      time: new Date().toLocaleTimeString(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  render() {
    return (
      <h2>
        Welcome to {this.props.bootcamp}. It is {this.state.time}
      </h2>
    );
  }
}
