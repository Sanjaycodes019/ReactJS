import React, { useState, useEffect } from "react";

const LifecycleFunctional = () => {
  // 🏗️ State for storing data
  const [data, setData] = useState(null);

  // ✅ useEffect runs after the component is mounted (Similar to componentDidMount)
  useEffect(() => {
    console.log("useEffect (Mounting): Fetching data...");
    // Simulating API Call
    setTimeout(() => {
      setData("Hello from API!");
      console.log("Data fetched!");
    }, 2000);

    // ❌ Cleanup function (Runs when the component is unmounted, like componentWillUnmount)
    return () => {
      console.log("Cleanup: Component is being removed...");
    };
  }, []); // Empty dependency array means it runs only once when mounted

  // 🎨 Render UI
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Functional Component Lifecycle</h1>
      <h2>{data ? data : "Loading..."}</h2>
    </div>
  );
};

export default LifecycleFunctional;
