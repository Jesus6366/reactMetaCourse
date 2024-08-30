import React, { useState } from "react";
import "./Toggler.css";

const Toggler = () => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleIsHappy = () => setIsHappy(!isHappy);

  return (
    <button onClick={toggleIsHappy} className="toggler">
      {isHappy ? "😄" : "🙁"}
    </button>
  );
};

export default Toggler;
