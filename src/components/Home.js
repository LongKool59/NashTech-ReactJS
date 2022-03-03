import React from "react";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bootcamp: "Rookies",
      time: new Date().toLocaleTimeString(),
      clickedTime: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }
  showAlert() {
    if (this.state.clickedTime <= 0) return;

    if (this.state.clickedTime % 15 === 0) {
      alert("FizzBuzz");
    } else if (this.state.clickedTime % 5 === 0) {
      alert("Buzz");
    } else if (this.state.clickedTime % 3 === 0) {
      alert("Fizz");
    }
  }
  clickGame() {
    this.setState(
      {
        clickedTime: this.state.clickedTime + 1,
      },
      this.showAlert
    );
  }
  render() {
    return (
      <React.Fragment>
        <h2>
          Welcome to {this.props.bootcamp}. It is {this.state.time}
        </h2>
        <button onClick={() => this.clickGame()}> Clicky Game</button>
      </React.Fragment>
    );
  }
}
