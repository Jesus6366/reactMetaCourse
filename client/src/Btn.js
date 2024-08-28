import React from "react";

// click event handling
// const Btn = () => {
//   const clickHandler = () => {
//     console.log("clicked");
//   };
//   return <button onClick={clickHandler}>Click me</button>;
// };

// export default Btn;

// onmouse over
const Btn = () => {
  const clickHandler = () => {
    console.log("Mouse Over");
  };
  return <button onMouseOver={clickHandler}>Click me</button>;
};

export default Btn;
