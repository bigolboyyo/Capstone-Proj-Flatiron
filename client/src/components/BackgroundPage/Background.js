import React from "react";
import "../BackgroundPage/Background.css";
import lawyerImg from "../../Images/lawyer.png";
import vagrantImg from "../../Images/vagrant.png";
import otakuImg from "../../Images/otaku.png";

function Background() {
  return (
    <div className="background-page">
      <h1>Choose your character's name and background!</h1>
      <label>Character Name: </label>{" "}
      <input name="character_name" type="text"></input>
      <div className="bkg-img-container">
        <img
          className="imported-image"
          id="lawyer-img"
          src={lawyerImg}
          alt="lawyer"
        ></img>
        <img
          className="imported-image"
          id="vagrant-img"
          src={vagrantImg}
          alt="lawyer"
        ></img>
        <img
          className="imported-image"
          id="otaku-img"
          src={otakuImg}
          alt="lawyer"
        ></img>
      </div>
    </div>
  );
}

export default Background;
