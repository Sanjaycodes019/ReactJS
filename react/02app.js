import React, { useState } from "react";
import Lifecycle from "./lifecycle"; // Import Class Component
import LifecycleFunctional from "./lifecycleFunctional"; // Import Functional Component

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount Component" : "Mount Component"}
      </button>
      
      {/* Toggle between Class and Functional Component */}
      {show && <Lifecycle />}
      {show && <LifecycleFunctional />}
    </div>
  );
}

export default App;
