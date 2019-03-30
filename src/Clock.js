import React, { Component } from "react";

class Clock extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.TimerID = setInterval(
      () =>
        this.setState({
          date: new Date()
        }),
      0
    );
  }

  componentWillUnmount() {
    clearInterval(this.TimerID);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        date: new Date()
      };
    });
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="time">
        <h2> It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
