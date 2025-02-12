import React, { useState } from "react";
import DataFetchingComponent from "./DataFetchingComponent"; // Import the fetching component

function App() {
  const [name, setName] = useState(""); // State for name input
  const [num1, setNum1] = useState(""); // State for first number input
  const [num2, setNum2] = useState(""); // State for second number input

  // Handler for name input
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // Handlers for number inputs
  const handleNum1Change = (event) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(event.target.value);
  };

  return (
    <div>
      {/* Section 1: Name Input and Greeting */}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Enter Your Name</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={handleNameChange}
          style={{ padding: "10px", fontSize: "16px", width: "250px" }}
        />
        <h2 style={{ marginTop: "20px" }}>
          Hello, <span style={{ color: "blue" }}>{name || "Guest"}</span>!
        </h2>
      </div>

      {/* Section 2: Simple Calculator */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>Simple Calculator</h1>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="number"
            placeholder="Enter first number"
            onChange={handleNum1Change}
            style={{ padding: "10px", fontSize: "16px", width: "250px" }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <input
            type="number"
            placeholder="Enter second number"
            onChange={handleNum2Change}
            style={{ padding: "10px", fontSize: "16px", width: "250px" }}
          />
        </div>

        {num1 !== "" && num2 !== "" && (
          <div>
            <p>Addition: {parseFloat(num1) + parseFloat(num2)}</p>
            <p>Subtraction: {parseFloat(num1) - parseFloat(num2)}</p>
            <p>Multiplication: {parseFloat(num1) * parseFloat(num2)}</p>
            <p>
              Division:{" "}
              {parseFloat(num2) !== 0
                ? (parseFloat(num1) / parseFloat(num2)).toFixed(2)
                : "Cannot divide by zero"}
            </p>
          </div>
        )}
      </div>

      {/* Section 3: Data Fetching */}
      <div style={{ marginTop: "50px" }}>
        <h1>Data Fetching Example</h1>
        <DataFetchingComponent />
      </div>
    </div>
  );
}

export default App;
