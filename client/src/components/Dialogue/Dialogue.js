import React, { useEffect } from "react";
import "../Dialogue/Dialogue.css";
// import { useEffect, useCallback } from "react";
// import Typewriter from "typewriter-effect";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Dialogue({ storyLine }) {
  // const [localWriter, setLocalWriter] = useState({});

  return (
    <div className="dialogue-container">
      <p>{storyLine.dialogue}</p>

      <p className="dialogue-img">{storyLine.storyline_img}</p>
    </div>
  );
}

export default Dialogue;
