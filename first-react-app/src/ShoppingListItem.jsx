import React from "react";

const ShoppingListItem = ({ item, quantity, completed, index }) => {
  const syltes = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <li style={syltes}>
      {item} - {quantity}
    </li>
  );
};

{
  /* <li
key={index}
style={{
  color: i.completed ? "grey" : "red",
  textDecoration: i.completed ? "line-through" : "none",
}}
>
{i.item} - {i.quantity}
</li> */
}

export default ShoppingListItem;
