import React from "react";
import "../Dialogue/Dialogue.css";
// import { useEffect, useCallback } from "react";
// import Typewriter from "typewriter-effect";

// import roboCampOne from "../../Images/robo_campfire_one.png";

function Dialogue({ storyLine }) {
  // IMAGE GOES BELOW, so needs IMG tag eventually

  // const typewriter = (
  //   <Typewriter
  //     options={{
  //       delay: 2,
  //     }}
  //     onInit={(typewriter) => {
  //       typewriter.typeString(storyLine.dialogue).start();
  //     }}
  //   />
  // );

  return (
    <div className="dialogue-container">
      {/* <Typewriter
        options={{
          delay: 25,
        }}
        onInit={(typewriter) => {
          typewriter.typeString(storyLine.dialogue).start();
        }}
      /> */}
      <p className="dialogue">{storyLine.dialogue}</p>
      <p className="dialogue-img">{storyLine.storyline_img}</p>
    </div>
  );
}

export default Dialogue;
