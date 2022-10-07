import React from "react";
import "../Option/Option.css";

function Option({ choice, navStoryLine }) {
  return (
    <button
      id={choice.choice_text}
      onClick={() => {
        const id = choice.next_choice;
        navStoryLine(id);
      }}
      className="options"
    >
      {choice.choice_text}
    </button>
  );
}

export default Option;
