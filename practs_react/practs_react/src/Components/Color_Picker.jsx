import  { useState } from "react";

const ColorPicker = () => {
  const [backgroundColor, setBackgroundColor] = useState("#ffffff"); // Default white background
  const [textColor, setTextColor] = useState("#000000"); // Default black text

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Color Picker</h1>

      {/* Color picker for background color */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Choose Background Color:
        </label>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setBackgroundColor(e.target.value)}
          className="cursor-pointer w-16 h-10 border rounded-md"
        />
      </div>

      {/* Color picker for text color */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">
          Choose Text Color:
        </label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
          className="cursor-pointer w-16 h-10 border rounded-md"
        />
      </div>

      {/* Paragraph with dynamic styles */}
      <div
        className="p-4 rounded-md"
        style={{
          backgroundColor: backgroundColor,
          color: textColor,
        }}
      >
        <p className="text-lg">
          This is a dynamic paragraph! Change my colors with the pickers above.
        </p>
      </div>
    </div>
  );
};

export default ColorPicker;
