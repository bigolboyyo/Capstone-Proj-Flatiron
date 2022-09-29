import React, { useEffect } from "react";
import { useSelector } from "react-redux";

function Item() {
  const activeChar = useSelector((state) => state.user.active_character);
  const charID = activeChar.id;

  //Set an inventory state in redux
  // map over inventory returning the individual items (names for now, images eventually)

  const getCharItems = async () => {
    const r = await fetch(`/characters/${charID}`);
    const inventory = await r.json();
    debugger;
  };

  //   useEffect(() => {
  //     getCharItems();
  //   }, []);

  return <div></div>;
}

export default Item;
