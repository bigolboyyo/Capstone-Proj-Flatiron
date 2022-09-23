import React from "react";
import { useState } from "react";
import "../BackgroundPage/Background.css";
import lawyerImg from "../../Images/lawyer.png";
import vagrantImg from "../../Images/vagrant.png";
import otakuImg from "../../Images/otaku.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setActiveCharacter,
  setActiveStory,
  setActiveStoryLine,
} from "../../features/user/userSlice";

function Background() {
  const [lawyerDetails, setLawyerDetails] = useState(false);
  const [vagrantDetails, setVagrantDetails] = useState(false);
  const [otakuDetails, setOtakuDetails] = useState(false);
  const [charName, setCharName] = useState("");
  const [background, setBackground] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCharNameChange = (e) => {
    setCharName(e.target.value);
  };

  const postStoryCreation = async (char) => {
    const startingStoryLine = () => {
      let start;
      if (background === "lawyer") {
        start = 1;
      }
      if (background === "vagrant") {
        start = 2;
      }
      if (background === "otaku") {
        start = 3;
      }
      return start;
    };

    const start = startingStoryLine();
    // result.push(start);
    dispatch(setActiveStoryLine(start));

    const story = {
      starting_point: `${background} story line`,
      character_id: char.id,
      current_story_line: start,
    };
    const config = {
      method: "POST",
      body: JSON.stringify(story),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const r = await fetch("/stories", config);
    const activeStory = await r.json();
    // result.push(activeStory);
    dispatch(setActiveStory(activeStory));
    // console.log(result);
  };

  const submitCharacter = async () => {
    // Add background state?
    const character = {
      character_name: charName,
      user_id: JSON.parse(localStorage.getItem("user_data")).id,
      background: background,
    };

    const config = {
      method: "POST",
      body: JSON.stringify(character),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const r = await fetch("/characters", config);
    if (r.ok) {
      const charRef = await r.json();
      // DON"T REVERSE THIS EVER
      dispatch(setActiveCharacter(charRef));
      await postStoryCreation(charRef);
      // SERIOUSLY STOP
      // REMEMBER THIS PAIN
      navigate("/adventure-start");
    } else {
      const errors = await r.json();
      console.log(errors);
    }
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
        <p className="bkg-choice">
          You have chosen the {background.toUpperCase()} background!
        </p>
      </div>
      <div className="bkg-img-container">
        <img
          name="lawyer"
          className="imported-image"
          id="lawyer-img"
          src={lawyerImg}
          alt="lawyer"
          onMouseOver={() => setLawyerDetails(true)}
          onMouseLeave={() => setLawyerDetails(false)}
          onClick={(e) => {
            setBackground(e.target.name);
          }}
        ></img>
        <img
          name="vagrant"
          className="imported-image"
          id="vagrant-img"
          src={vagrantImg}
          alt="vagrat"
          onMouseOver={() => setVagrantDetails(true)}
          onMouseLeave={() => setVagrantDetails(false)}
          onClick={(e) => {
            setBackground(e.target.name);
          }}
        ></img>
        <img
          name="otaku"
          className="imported-image"
          id="otaku-img"
          src={otakuImg}
          alt="otaku"
          onMouseOver={() => setOtakuDetails(true)}
          onMouseLeave={() => setOtakuDetails(false)}
          onClick={(e) => {
            setBackground(e.target.name);
          }}
        ></img>
      </div>
      <button onClick={submitCharacter} className="start-adv-btn">
        Start Adventure!
      </button>

      {lawyerDetails ? (
        <p className="bkg-info">Info about the lawyer background goes here!</p>
      ) : null}
      {vagrantDetails ? (
        <p className="bkg-info">Info about the vagrant background goes here!</p>
      ) : null}
      {otakuDetails ? (
        <p className="bkg-info">Info about the otaku background goes here!</p>
      ) : null}
    </div>
  );
}

export default Background;
