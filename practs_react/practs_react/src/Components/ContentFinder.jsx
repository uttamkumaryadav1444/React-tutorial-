import React, { useState } from "react";

const ContentFinder = () => {
  // State to store the list of items
  const [items, setItems] = useState(["Apple", "Banana", "Cherry", "Date", "Grape"]);
  
  // State for search input
  const [searchTerm, setSearchTerm] = useState("");
  
  // State for new item input
  const [newItem, setNewItem] = useState("");

  // Add a new item to the list
  const handleAddItem = () => {
    if (newItem.trim() === "") {
      alert("Please enter a valid item.");
      return;
    }
    setItems([...items, newItem.trim()]); // Add item to the list
    setNewItem(""); // Clear the input
  };

  // Filter the list based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Content Finder</h1>

      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      {/* Add Item */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-grow p-2 border rounded-lg"
        />
        <button
          onClick={handleAddItem}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      {/* Display Filtered Items */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Items:</h2>
        {filteredItems.length > 0 ? (
          <ul className="list-disc pl-5">
            {filteredItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No items match your search.</p>
        )}
      </div>
    </div>
  );
};

export default ContentFinder;
