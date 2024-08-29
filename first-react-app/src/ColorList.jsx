import React from "react";

const ColorList = ({ colors }) => {
  return (
    <div>
      <p>Color List</p>
      {colors.map((color, index) => (
        <li key={index} style={{ color: color }}>
          Color: {color}
        </li>
      ))}
    </div>
  );
};

export default ColorList;
