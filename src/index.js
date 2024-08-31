import React from "react";
import ReactDom from "react-dom/client";

const Greeting = () => {
  return <h2>My first component</h2>;
};

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<Greeting />);
