import React, { useState, useEffect } from "react";
import Item from "./Item";
import { useSelector } from "react-redux";
import "./Inventory.css";

function Inventory({ invChange }) {
  const [inventory, setInventory] = useState([]);

  const activeChar = useSelector((state) => state.user.active_character);
  const localChar = JSON.parse(
    localStorage.getItem("user_data")
  ).active_character;

  const charID = activeChar ? activeChar.id : localChar.id;

  const getCharItems = async () => {
    const r = await fetch(`/characters/${charID}`);
    const char = await r.json();
    const inventory = char.character_items;
    setInventory(inventory);
  };

  useEffect(() => {
    getCharItems();
  }, [invChange]);

  const charInv = inventory.map((item) => {
    return <Item key={item.id} item={item} />;
  });

  return <div className="inventory">{charInv}</div>;
}

export default Inventory;
