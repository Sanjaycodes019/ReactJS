import React, { Component } from "react";

class Lifecycle extends Component {
  // 🏗️ 1. Constructor (Initialization)
  constructor() {
    super();
    console.log("Constructor: Initializing Component...");
    this.state = { data: null }; // Initialize state
  }

  // ✅ 2. componentDidMount (Runs after the component is added to the screen)
  componentDidMount() {
    console.log("componentDidMount: Fetching data...");
    // Simulating API Call
    setTimeout(() => {
      this.setState({ data: "Hello from API!" });
      console.log("Data fetched!");
    }, 2000);
  }

  // 🔄 3. componentDidUpdate (Runs after the component updates)
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component Updated!");
  }

  // ❌ 4. componentWillUnmount (Runs before the component is removed)
  componentWillUnmount() {
    console.log("componentWillUnmount: Cleanup before removing the component...");
  }

  // 🎨 5. Render Method (Displays UI)
  render() {
    console.log("Render: Updating UI");
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h1>Class Component Lifecycle</h1>
        <h2>{this.state.data ? this.state.data : "Loading..."}</h2>
      </div>
    );
  }
}

export default Lifecycle;
