import React, { Component } from "react";

class CounterApp extends Component {
  state = { count: 0 };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseCount}>Increase</button>
        <DisplayCounter count={this.state.count} />
      </div>
    );
  }
}

class DisplayCounter extends Component {
  render() {
    return (
      <div>
        <h1>Count: {this.props.count}</h1>
        <CounterDetails count={this.props.count} />
      </div>
    );
  }
}

class CounterDetails extends Component {
  render() {
    return <span>Counter received from DisplayCounter: {this.props.count}</span>;
  }
}

export default CounterApp;
