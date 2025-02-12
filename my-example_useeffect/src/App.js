import React from "react";
import ArrayToListComponent from "./ArrayToListComponent"; // Import the ArrayToListComponent

function App() {
  const initialArray = ["HTML", "CSS", "JAVA", "JavaSctipt"]; // The initial array to pass as a prop

  return (
    <div>
      <ArrayToListComponent inputArray={initialArray} /> {/* Pass the array to ArrayToListComponent */}
    </div>
  );
}

export default App;
