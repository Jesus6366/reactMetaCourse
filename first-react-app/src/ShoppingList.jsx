import React from "react";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = ({ items }) => {
  return (
    <ul>
      {items.map((i, index) => (
        <ShoppingListItem
          key={index}
          item={i.item}
          quantity={i.quantity}
          completed={i.completed}
        />
      ))}
    </ul>
  );
};

export default ShoppingList;
