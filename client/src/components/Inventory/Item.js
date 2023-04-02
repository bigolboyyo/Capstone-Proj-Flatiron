import React from "react";

function Item({ item }) {
  return (
    <div>
      <p>{item.item_name}</p>
    </div>
  );
}

export default Item;
