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
  grabAllStories,
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

  //FIXME: THIS fetchStories function can be abstracted out. Will need to either call this a bunch
  // // Or figure out how to auto call/update the stories with associated choices
  const fetchStories = async () => {
    const r = await fetch("/story_lines");
    const stories = await r.json();
    dispatch(grabAllStories(stories));
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
    dispatch(setActiveStoryLine(start));
    // console.log(result);
  };

  //TODO: Here I am creating instances of options and choices
  // If this is the route I take I need to set the option/routes to match the storylines
  // I have access to all the stories. Maybe grab all the storylines specifically?
  // My choices also have a next_choice attr (could use this to determine the following navigation)

  const postInitOption = async (optionObj) => {
    const config = {
      method: "POST",
      body: JSON.stringify(optionObj),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const r = await fetch("/options", config);
    const postedOption = await r.json();
    localStorage.setItem("init", JSON.stringify(postedOption));
  };

  const postInitChoices = async (choiceObj) => {
    const config = {
      method: "POST",
      body: JSON.stringify(choiceObj),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const r = await fetch("/choices", config);
    const postedChoices = await r.json();
    console.log(postedChoices);
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

      const optionCreation = {
        story_id: JSON.parse(localStorage.getItem("user_data")).active_story.id,
        story_line_id: JSON.parse(localStorage.getItem("user_data"))
          .active_story.current_story_line,
      };

      await postInitOption(optionCreation);

      // How can I abstract this code to be resued a specific number of times?
      // When I post the associated option for the char, I will obvi have multiple choices

      // rough pseudo code to follow...

      // function choiceCreation(times, choiceTextObj){
      //   // For loop for the length of times?
      //   // return a choice text object where each choice_text is ...
      //   // // one of the param key/value pairs?
      // }

      const choiceCreation = {
        option_id: JSON.parse(localStorage.getItem("init")).id,
        choice_text: "Your Local Storage!",
      };

      await postInitChoices(choiceCreation);
      fetchStories();

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
