import React from "react";

const Slots = ({ val1, val2, val3 }) => {
  const isWinner = val1 === val2 && val1 === val3;
  return (
    <>
      {val1} {val2} {val3}
      <h2 style={{ color: isWinner ? "green" : "red" }}>
        {isWinner ? "You Win!!" : "You Loose!"}
      </h2>
      {isWinner && <h3>Congrats</h3>}
    </>
  );
};

export default Slots;
