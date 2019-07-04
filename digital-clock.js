import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getTime()
    }
  }
  getTime(){
    return new Date().toLocaleTimeString();
  }
  componentWillMount() {
    setInterval(() =>{
      this.setState({
        time: this.getTime()
      })
    }, 1000);
  }

  render() {
    return (
      <div id="clock">{this.state.time}</div>
    );
  }
}

export default DigitalClock;
