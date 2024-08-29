const Die = ({ numSides = 6 }) => {
  const roll = Math.floor(Math.random() * numSides) + 1;
  return <p>Die roll: {roll}</p>;
};

export default Die;
