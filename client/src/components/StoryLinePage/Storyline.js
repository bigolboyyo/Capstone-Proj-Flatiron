import React, { useEffect } from "react";
import "../StoryLinePage/Storyline.css";

function Storyline() {
  const fetchOptions = async () => {
    const r = await fetch("/options");
    const story = await r.json();
    // debugger;
    console.log(story);
  };

  return (
    <div className="storyline-container">
      <div className="story-dialogue-container">
        <button onClick={fetchOptions}>Fetch</button>
      </div>
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
