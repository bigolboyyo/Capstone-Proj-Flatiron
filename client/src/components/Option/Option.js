import React from "react";
import "../Option/Option.css";

function Option({ choice, navStoryLine }) {
  return (
    <div
      id={choice.id}
      onClick={(e) => {
        const id = e.target.id;
        navStoryLine(id);
      }}
      className="options"
    >
      {choice.choice_text}
    </div>
  );
}

export default Option;
