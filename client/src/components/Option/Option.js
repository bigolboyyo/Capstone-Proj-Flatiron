import React from "react";
import "../Option/Option.css";

function Option({ choice }) {
  return <div className="options">{choice.choice_text}</div>;
}

export default Option;
