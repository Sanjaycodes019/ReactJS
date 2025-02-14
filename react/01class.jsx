import React, { Component } from "react";

// Class Component Example
class Counter extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      count: 0, // Initial state
    };
  }

  // Lifecycle method - Runs when component is mounted
  componentDidMount() {
    console.log("Component Mounted ✅");
  }

  // Lifecycle method - Runs when state or props update
  componentDidUpdate() {
    console.log("Component Updated 🔄");
  }

  // Lifecycle method - Runs when component is removed
  componentWillUnmount() {
    console.log("Component Will Unmount ❌");
  }

  // Method to update the state
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {/* Displaying Props */}
        <h1>Hello, {this.props.name}! 👋</h1>
        {/* Displaying State */}
        <h2>Count: {this.state.count}</h2>
        {/* Button to update state */}
        <button onClick={this.increaseCount}>Increase Count</button>
      </div>
    );
  }
}

export default Counter;
