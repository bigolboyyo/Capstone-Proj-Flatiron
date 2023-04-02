import React from "react";
import "./EndState.css";

function EndState() {
  return (
    <div className="demoEnd">
      <h2>Thanks for playing the demo of my first very text adventure!</h2>
      <p>Future Updates include:</p>
      <p>- Finishing of the lawyer storyline</p>
      <p>- Adding additional items and item interaction</p>
      <p>- Additional background stories (Vagrant and Otaku)</p>
      <p>- Custom animations/styling</p>
      <p>- Audio/Music</p>
      <p>- User Settings system</p>
      <p>- Leaderboard and Character Achievements</p>
      <p>- Possibly even more!</p>

      <p>
        Any questions, comments, concerns, or general admiration can be sent to{" "}
        <span>wesley.grant94@gmail.com</span>
      </p>
      <p>
        Check out the repo for this project
        <a
          href="https://github.com/bigolboyyo/capstone-proj-flatiron"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          here!
        </a>
      </p>
    </div>
  );
}

export default EndState;
