import React from "react";
import { useNavigate } from "react-router-dom";

function CharacterSlot({ idx }) {
  const navigate = useNavigate();

  const navigateToCreation = () => {
    navigate("/background");
  };
  return (
    <div className="character-slot" key={idx}>
      [Empty Character Slot] ------{" "}
      <button onClick={navigateToCreation}>Create Character</button>
    </div>
  );
}

export default CharacterSlot;
