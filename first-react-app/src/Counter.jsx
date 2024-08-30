import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const handleNumber = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>The Count is: {count}</p>
      <button onClick={handleNumber}>Increment</button>
    </div>
  );
};

export default Counter;
