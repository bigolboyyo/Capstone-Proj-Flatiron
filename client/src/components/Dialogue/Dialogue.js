import React, { useState, useEffect } from "react";
import "../Dialogue/Dialogue.css";

function Dialogue({ storyLine }) {
  const [image, setImage] = useState("");

  const grabStoryLineImg = async (storyLineId) => {
    const config = {
      method: "POST",
      body: JSON.stringify(storyLineId),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const r = await fetch("/img-url", config);
    const response = await r.text();
    setImage(response);
  };

  useEffect(() => {
    grabStoryLineImg(storyLine.id);
  }, [storyLine.id]);

  return (
    <div className="dialogue-container">
      {image !== "null" ? (
        <img className="dialogue-img" src={image} alt="broken-machines" />
      ) : null}
      <p className="active-dialogue">{storyLine.dialogue}</p>
    </div>
  );
}

export default Dialogue;
