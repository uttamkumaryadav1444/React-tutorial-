import  { useState } from "react";

const Pagination = () => {
  // Static array of 25 items
  const items = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);
  
  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Items per page
  const itemsPerPage = 5;

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items to display for the current page
  const currentItems = items.slice(startIndex, endIndex);

  return (
    <div className="p-4 max-w-md mx-auto text-center">
      <h1 className="text-xl font-bold mb-4">Pagination Example</h1>
      
      {/* Display current items */}
      <ul className="mb-4">
        {currentItems.map((item, index) => (
          <li key={index} className="p-2 border-b">
            {item}
          </li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div className="space-x-2">
        {[...Array(Math.ceil(items.length / itemsPerPage)).keys()].map((page) => (
          <button
            key={page + 1}
            onClick={() => setCurrentPage(page + 1)}
            className={`px-4 py-2 rounded-lg ${
              currentPage === page + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
