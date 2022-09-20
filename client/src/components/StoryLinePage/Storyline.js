import React from "react";
import "../StoryLinePage/Storyline.css";

function Storyline() {
  return (
    <div className="storyline-container">
      <div className="story-dialogue-container"></div>
      <div className="options-container">
        <div className="options"></div>
        <div className="options"></div>
        <div className="options"></div>
        <div className="options"></div>
      </div>
      <div className="inventory-container"></div>
    </div>
  );
}

export default Storyline;
