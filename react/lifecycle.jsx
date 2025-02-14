import React, { Component } from "react";

class Lifecycle extends Component {
  // 🏗️ 1. Constructor (Initialization)
  constructor() {
    super();
    console.log("Constructor: Component is being created");
    this.state = { count: 0 }; // Initialize state
  }

  // ✅ 2. componentDidMount (Runs after the component is added to the screen)
  componentDidMount() {
    console.log("componentDidMount: Component added to DOM");
  }

  // 🔄 3. shouldComponentUpdate (Decides if re-rendering should happen)
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate: Should the component update?");
    return true; // If false, the component will not re-render
  }

  // 🔄 4. componentDidUpdate (Runs after the component updates)
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component updated");
  }

  // ❌ 5. componentWillUnmount (Runs before the component is removed)
  componentWillUnmount() {
    console.log("componentWillUnmount: Component removed from DOM");
  }

  // Function to update state
  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // 🎨 6. Render Method (Displays UI)
  render() {
    console.log("Render: Updating UI");
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increaseCount}>Increase Count</button>
      </div>
    );
  }
}

export default Lifecycle;

/* 
✅ Mounting Phase →     constructor(), render(), componentDidMount()
✅ Updating Phase →     shouldComponentUpdate(), render(), componentDidUpdate()
✅ Unmounting Phase →   componentWillUnmount()
*/
