import React, { Component } from "react";
import Clock from "./Clock";

class TimeofDay extends Component {
  render() {
    const date = new Date();
    const time = date.getHours();

    let TimeofDay;

    if (time < 12) {
      TimeofDay = `Good morning`;
    } else if (12 <= time && time < 17) {
      TimeofDay = `Good afternoon`;
    } else {
      TimeofDay = `Good evening`;
    }

    return (
      <div className="time">
        <h2>{TimeofDay}, Avi. </h2>
        <Clock />
      </div>
    );
  }
}

export default TimeofDay;
