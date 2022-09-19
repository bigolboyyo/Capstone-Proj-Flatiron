import React from "react";
import { useNavigate } from "react-router-dom";

function CharacterSlot({ char, idx }) {
  const navigate = useNavigate();

  const navigateToCreation = () => {
    navigate("/background");
  };
  return (
    <h1>
      [Empty Character Slot] ------{" "}
      <button onClick={navigateToCreation}>Create Character</button>
    </h1>
  );
}

export default CharacterSlot;
