import React from "react";
import "../Dialogue/Dialogue.css";
// import roboCampOne from "../../Images/robo_campfire_one.png";

function Dialogue({ story }) {
  // IMAGE GOES BELOW, so needs IMG tag eventually
  return (
    <div>
      <h1>{story[1].dialogue}</h1>
      {/* <img
        src={story[1].storyline_img}
        alt="robo campfire one"
        className="dialogue-img"
      /> */}
      <p>{story[1].storyline_img}</p>
    </div>
  );
}

export default Dialogue;
