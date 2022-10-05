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

// import initChoiceCreation from "./InitChoices";

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
        start = 11;
      }
      if (background === "otaku") {
        start = 21;
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

  async function initChoiceCreation(background) {
    const optionID = JSON.parse(localStorage.getItem("init")).id;

    const lawChoices = {
      choice_one: {
        option_id: optionID,
        choice_text: "Start walking towards the sun",
        next_choice: "Choice One Followup",
        //next nav: 2
      },
      choice_two: {
        option_id: optionID,
        choice_text: "Start walking away from the sun",
        next_choice: "Choice Two Followup",
        //next nav: 3
      },
      choice_three: {
        option_id: optionID,
        choice_text: "Examine the machinery around you",
        next_choice: "Choice Three Followup",
        //next nav: 4
      },
      choice_four: {
        option_id: optionID,
        choice_text: "Examine yourself",
        next_choice: "Choice Four Followup",
        //next nav:
      },
    };

    const vagrantChoices = {
      choice_one: {
        option_id: optionID,
        choice_text: "Vagrant Choice one",
        next_choice: "Choice One Followup",
      },
      choice_two: {
        option_id: optionID,
        choice_text: "Vagrant Choice two",
        next_choice: "Choice Two Followup",
      },
      choice_three: {
        option_id: optionID,
        choice_text: "Vagrant Choice three",
        next_choice: "Choice Three Followup",
      },
      choice_four: {
        option_id: optionID,
        choice_text: "Vagrant Choice four",
        next_choice: "Choice Four Followup",
      },
    };

    const otakuChoices = {
      choice_one: {
        option_id: optionID,
        choice_text: "Otaku Choice one",
        next_choice: "Choice One Followup",
      },
      choice_two: {
        option_id: optionID,
        choice_text: "Otaku Choice two",
        next_choice: "Choice Two Followup",
      },
      choice_three: {
        option_id: optionID,
        choice_text: "Otaku Choice three",
        next_choice: "Choice Three Followup",
      },
      choice_four: {
        option_id: optionID,
        choice_text: "Otaku Choice four",
        next_choice: "Choice Four Followup",
      },
    };

    //FIXME: LOADING SCREEN NEEDED HERE

    const laws = Object.values(Object.values(lawChoices));
    const crimes = Object.values(Object.values(vagrantChoices));
    const animes = Object.values(Object.values(otakuChoices));

    if (background === "lawyer") {
      for (const choice of laws) {
        await postInitChoices(choice);
      }
    }
    if (background === "vagrant") {
      for (const choice of crimes) {
        await postInitChoices(choice);
      }
    }
    if (background === "otaku") {
      for (const choice of animes) {
        await postInitChoices(choice);
      }
    }
  }

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

      await initChoiceCreation(background);
      await fetchStories();

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
          // onClick={(e) => {
          //   setBackground(e.target.name);
          // }}
        ></img>
        <img
          name="otaku"
          className="imported-image"
          id="otaku-img"
          src={otakuImg}
          alt="otaku"
          onMouseOver={() => setOtakuDetails(true)}
          onMouseLeave={() => setOtakuDetails(false)}
          //   onClick={(e) => {
          //     setBackground(e.target.name);
          //   }
          // }
        ></img>
      </div>
      <button onClick={submitCharacter} className="start-adv-btn">
        Start Adventure!
      </button>

      {lawyerDetails ? (
        <p className="bkg-info">Info about the lawyer background goes here!</p>
      ) : null}
      {vagrantDetails ? (
        <p className="bkg-info">
          Stay tuned for future updates! Only Lawyer background currently
          available.
        </p>
      ) : null}
      {otakuDetails ? (
        <p className="bkg-info">
          Stay tuned for future updates! Only Lawyer background currently
          available.
        </p>
      ) : null}
    </div>
  );
}

export default Background;
