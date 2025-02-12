import { useState } from "react";

const ThemeToggler = () => {
  const [isDayTheme, setIsDayTheme] = useState(true); // Day theme by default

  const toggleTheme = () => {
    setIsDayTheme(!isDayTheme);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors duration-500 ${
        isDayTheme ? "bg-blue-200 text-gray-800" : "bg-gray-900 text-gray-200"
      }`}
    >
      <div className="text-center p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">
          {isDayTheme ? "☀️ Day Theme" : "🌙 Night Theme"}
        </h1>
        <p className="mb-4">
          Toggle the switch below to change the theme of this application.
        </p>
        <button
          onClick={toggleTheme}
          className={`px-6 py-2 rounded-lg font-semibold shadow ${
            isDayTheme
              ? "bg-yellow-400 text-gray-800 hover:bg-yellow-500"
              : "bg-blue-700 text-gray-200 hover:bg-blue-800"
          }`}
        >
          {isDayTheme ? "Switch to Night Mode" : "Switch to Day Mode"}
        </button>
      </div>
    </div>
  );
};

export default ThemeToggler;
