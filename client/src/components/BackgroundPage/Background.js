import React from "react";
import { useState } from "react";
import "../BackgroundPage/Background.css";
import lawyerImg from "../../Images/lawyer.png";
import vagrantImg from "../../Images/vagrant.png";
import otakuImg from "../../Images/otaku.png";

function Background() {
  const [lawyerDetails, setLawyerDetails] = useState(false);
  const [vagrantDetails, setVagrantDetails] = useState(false);
  const [otakuDetails, setOtakuDetails] = useState(false);
  const [charName, setCharName] = useState("");

  const handleCharNameChange = (e) => {
    setCharName(e.target.value);
    console.log(charName);
  };

  return (
    <div className="background-page">
      <h1 style={{ alignSelf: "center" }}>
        Choose your character's name and background!
      </h1>
      <div className="char-name-container">
        <label>Character Name: </label>{" "}
        <input
          onChange={handleCharNameChange}
          name="character_name"
          type="text"
          value={charName}
          required={true}
        ></input>
      </div>
      <div className="bkg-img-container">
        <img
          className="imported-image"
          id="lawyer-img"
          src={lawyerImg}
          alt="lawyer"
          onMouseOver={() => setLawyerDetails(true)}
          onMouseLeave={() => setLawyerDetails(false)}
        ></img>
        <img
          className="imported-image"
          id="vagrant-img"
          src={vagrantImg}
          alt="vagrat"
          onMouseOver={() => setVagrantDetails(true)}
          onMouseLeave={() => setVagrantDetails(false)}
        ></img>
        <img
          className="imported-image"
          id="otaku-img"
          src={otakuImg}
          alt="otaku"
          onMouseOver={() => setOtakuDetails(true)}
          onMouseLeave={() => setOtakuDetails(false)}
        ></img>
      </div>
      <div className="bkg-details">
        {lawyerDetails ? (
          <p className="bkg-info">
            Info about the lawyer background goes here!
          </p>
        ) : null}
        {vagrantDetails ? (
          <p className="bkg-info">
            Info about the vagrant background goes here!
          </p>
        ) : null}
        {otakuDetails ? (
          <p className="bkg-info">Info about the otaku background goes here!</p>
        ) : null}
      </div>
    </div>
  );
}

export default Background;
