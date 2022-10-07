import React, { useEffect } from "react";
import "../Dialogue/Dialogue.css";
// import { useEffect, useCallback } from "react";
import Typewriter from "typewriter-effect";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import roboCampOne from "../../Images/robo_campfire_one.png";

function Dialogue({ storyLine }) {
  // const [localWriter, setLocalWriter] = useState({});
  // const navigate = useNavigate();

  const allTypeWriters = JSON.parse(localStorage.getItem("stories")).map(
    (story) => {
      return (
        <Typewriter
          options={{
            delay: 10,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(story.dialogue).start();
          }}
        />
      );
    }
  );

  const storyLineId = JSON.parse(
    localStorage.getItem("user_data")
  ).current_storyline;

  const returnActive = () => {
    const activeType = allTypeWriters.find(() => storyLineId);

    return activeType;
  };

  // const resetTyper = () => {
  //   const copy = { ...localWriter };
  //   copy.props.init();
  //   setLocalWriter(copy);
  // };

  // useEffect(() => {
  //   returnActive();
  // }, []);

  return (
    <div className="dialogue-container">
      {returnActive()}

      {/* <p className="dialogue">{storyLine.dialogue}</p> */}
      <p className="dialogue-img">{storyLine.storyline_img}</p>
      {/* <button onClick={resetTyper}>RESET TYPEWRITER</button> */}
    </div>
  );
}

export default Dialogue;
