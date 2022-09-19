import React from "react";

function CharacterFilled({ char, idx }) {
  return (
    <h1 key={idx}>
      {char.character_name} ---- {char.background} <button>Continue</button>
    </h1>
  );
}

export default CharacterFilled;
