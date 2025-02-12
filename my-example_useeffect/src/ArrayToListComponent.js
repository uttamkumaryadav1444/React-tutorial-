import React, { useState, useEffect } from "react";

// Simulated API call to fetch data (returns an array of strings)
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["React", "JavaScript", "CSS", "HTML", "Node.js"]);
    }, 3000); // Simulates a delay of 3 seconds
  });
}

// Functional component to convert array into an unordered list
function ArrayToListComponent({ inputArray }) {
  const [listItems, setListItems] = useState([]);
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    // Convert the input array into list items
    setListItems(inputArray);

    // Fetch data asynchronously and set fetchedData state
    fetchData().then((data) => {
      setFetchedData(data);
    });
  }, [inputArray]); // Runs whenever inputArray changes

  return (
    <div>
      <h1>Input Array</h1>
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h1>Fetched Data</h1>
      {fetchedData.length === 0 ? (
        <p>Loading fetched data...</p>
      ) : (
        <ul>
          {fetchedData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ArrayToListComponent;
