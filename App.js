class DigitalClock extends React.Component {
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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <DigitalClock />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
