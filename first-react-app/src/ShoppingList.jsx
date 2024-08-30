import React from "react";

const ShoppingList = ({ items }) => {
  return (
    <ul>
      {items.map((i, index) => (
        <li
          key={index}
          style={{
            color: i.completed ? "grey" : "red",
            textDecoration: i.completed ? "line-through" : "none",
          }}
        >
          {i.item} - {i.quantity}
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
