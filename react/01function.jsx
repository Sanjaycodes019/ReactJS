import React, { useState, useEffect } from "react";

// Functional Component Example
const Counter = (props) => {
  // useState Hook to handle state
  const [count, setCount] = useState(0);

  // useEffect Hook - Runs when the component is mounted
  useEffect(() => {
    console.log("Component Mounted ✅");

    // Cleanup function - Runs when component is removed
    return () => {
      console.log("Component Will Unmount ❌");
    };
  }, []);

  // useEffect Hook - Runs when count updates
  useEffect(() => {
    console.log("Component Updated 🔄");
  }, [count]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Displaying Props */}
      <h1>Hello, {props.name}! 👋</h1>
      {/* Displaying State */}
      <h2>Count: {count}</h2>
      {/* Button to update state */}
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Counter;
