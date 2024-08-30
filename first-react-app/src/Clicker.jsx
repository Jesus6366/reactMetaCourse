import React from "react";

// const handleOver = function () {
//   console.log("Hovered");
// };
const Clicker = ({ message, buttonText }) => {
  // on click event
  const handleClick = function () {
    alert(message);
  };
  return (
    <div>
      {/* <p onMouseOver={handleOver}>Click The Button</p> */}
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
};

export default Clicker;
