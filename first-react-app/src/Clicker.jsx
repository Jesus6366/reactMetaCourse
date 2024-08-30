import React from "react";

// on click event
const handleClick = function () {
  console.log("CLICKED BUTTON");
};
const Clicker = () => {
  return (
    <div>
      <p>Click The Button</p>
      <button onOver={handleClick}>Click</button>
    </div>
  );
};

export default Clicker;
