import React, { useState } from "react";
import "./ColorBox.css";

const ColorBox = ({ colors }) => {
  const [colorBoxes, setColorBoxes] = useState(colors);

  const randomColorGenerator = (index) => {
    // Generate random values for red, green, and blue
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    // Convert RGB values to hexadecimal
    const newColor = `#${((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)}`;

    // Update the color of the clicked box
    const updatedColors = [...colorBoxes];
    updatedColors[index] = newColor;
    setColorBoxes(updatedColors);
  };

  return (
    <div className="color-box-grid">
      {colorBoxes.map((color, index) => (
        <div
          key={index}
          className="color-box"
          style={{ backgroundColor: color }}
          onClick={() => randomColorGenerator(index)}
        ></div>
      ))}
    </div>
  );
};

export default ColorBox;
