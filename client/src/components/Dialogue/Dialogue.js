import React, { useState, useEffect } from "react";
import "../Dialogue/Dialogue.css";
// import { useEffect, useCallback } from "react";
// import Typewriter from "typewriter-effect";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Dialogue({ storyLine }) {
  // const [localWriter, setLocalWriter] = useState({});

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
      <p>{storyLine.dialogue}</p>
      <img className="dialogue-img" src={image} alt="broken-machines" />
    </div>
  );
}

export default Dialogue;
