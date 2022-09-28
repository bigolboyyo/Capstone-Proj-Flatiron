import React, { useEffect } from "react";
// , { useEffect, useState }
import Dialogue from "../Dialogue/Dialogue";
import Option from "../Option/Option";
import "../StoryLinePage/Storyline.css";
import { useSelector } from "react-redux";
import {
  setActiveStory,
  setActiveStoryLine,
  grabAllStories,
} from "../../features/user/userSlice";
import { setOptionStoryLine } from "../../features/optionSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Storyline() {
  // robo_story = Story.create!(starting_point: "lawyer starting point", character_id: robot.id)

  // starting_story_line = StoryLine.create!(dialogue: "You are starting the Robot Text Adventure!!!", storyline_img: "INSERT IMAGE HERE")

  // starting_option = Option.create!(story_id: robo_story.id, story_line_id: starting_story_line.id)

  // starting_choice_one = Choice.create!(option_id: starting_option.id, choice_text: "EAT")

  //FIXME:
  // How can I associate hard coded storylines with newly created options/choices?

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeChar = useSelector((state) => state.user.active_character);
  console.log(activeChar);

  const activeStory = useSelector((state) => state.user.active_story);
  console.log(activeStory);

  const reduxStories = useSelector((state) => state.user.all_stories);
  const localStories = JSON.parse(localStorage.getItem("stories"));
  const stories = reduxStories ? reduxStories : localStories;
  // const actStory = useSelector((state) => state.user.active_story);

  const reduxStoryLine = useSelector((state) => state.user.current_storyline);
  const localStoryLine = JSON.parse(
    JSON.parse(localStorage.getItem("user_data")).current_storyline
  );

  const actStoryLine = reduxStoryLine ? reduxStoryLine : localStoryLine;

  const storyLine = stories.find((s) => s.id === actStoryLine);

  const postOption = async (optionObj) => {
    const config = {
      method: "POST",
      body: JSON.stringify(optionObj),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const r = await fetch("/options", config);
    const postedOption = await r.json();
    localStorage.setItem("options", JSON.stringify(postedOption));
  };

  const postChoices = async (choiceObj) => {
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

  const choiceCreation = async (background, option) => {
    const options = JSON.parse(localStorage.getItem("options"));
    const optID = options.id;
    const navID = option.story_line_id;

    const lawBatchTwo = {
      choice_one: {
        option_id: optID,
        choice_text: "LAWMAN",
        next_choice: "Storyline#2",
      },
      choice_two: {
        option_id: optID,
        choice_text: "LAWBRO",
        next_choice: "Storyline#3",
      },
      choice_three: {
        option_id: optID,
        choice_text: "LAWDUDE",
        next_choice: "Storyline#4",
      },
      choice_four: {
        option_id: optID,
        choice_text: "LAWGUY",
        next_choice: "Storyline#5",
      },
    };

    const crimeBatchTwo = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME",
        next_choice: "CRIME#2",
      },
      choice_two: {
        option_id: optID,
        choice_text: "VAGRANT",
        next_choice: "CRIME#3",
      },
      choice_three: {
        option_id: optID,
        choice_text: "STEAL",
        next_choice: "Crime#4",
      },
      choice_four: {
        option_id: optID,
        choice_text: "LIE",
        next_choice: "Crime#5",
      },
    };

    const animeBatchTwo = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#2",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#3",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#4",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#5",
      },
    };

    const laws = Object.values(Object.values(lawBatchTwo));
    const crimes = Object.values(Object.values(crimeBatchTwo));
    const animes = Object.values(Object.values(animeBatchTwo));

    if (navID === 2) {
      for (const choice of laws) {
        await postChoices(choice);
      }
    }
    if (navID === 12) {
      for (const choice of crimes) {
        await postChoices(choice);
      }
    }
    if (navID === 22) {
      for (const choice of animes) {
        await postChoices(choice);
      }
    }
  };

  const fetchStories = async () => {
    const r = await fetch("/story_lines");
    const stories = await r.json();
    dispatch(grabAllStories(stories));
  };

  const doAllTheThings = async (nav) => {
    dispatch(setOptionStoryLine(nav));
    await saveData(nav);
    await fetchStories();
  };

  const navStoryLine = async (id) => {
    let nav;
    const actStoryId = JSON.parse(localStorage.getItem("user_data"))
      .active_story.id;

    let option = {
      story_id: actStoryId,
      story_line_id: false,
    };

    if (id === "Choice One Followup" && activeChar.background === "lawyer") {
      nav = 2;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Two Followup" && activeChar.background === "lawyer") {
      nav = 3;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Three Followup" && activeChar.background === "lawyer") {
      nav = 4;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Four Followup" && activeChar.background === "lawyer") {
      nav = 5;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Storyline#2" && activeChar.background === "lawyer") {
      nav = 6;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Storyline#3" && activeChar.background === "lawyer") {
      nav = 7;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Storyline#4" && activeChar.background === "lawyer") {
      nav = 8;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }

    if (id === "Storyline#5" && activeChar.background === "lawyer") {
      nav = 9;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }

    if (id === "Choice One Followup" && activeChar.background === "vagrant") {
      nav = 12;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Two Followup" && activeChar.background === "vagrant") {
      nav = 13;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Three Followup" && activeChar.background === "vagrant") {
      nav = 14;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Four Followup" && activeChar.background === "vagrant") {
      nav = 15;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }

    if (id === "Choice One Followup" && activeChar.background === "otaku") {
      nav = 22;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Two Followup" && activeChar.background === "otaku") {
      nav = 23;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Three Followup" && activeChar.background === "otaku") {
      nav = 24;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Four Followup" && activeChar.background === "otaku") {
      nav = 25;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    //Need a check to see if the story id exists
    //If it doesn't do something!

    dispatch(setActiveStoryLine(nav));
  };

  const mappedChoices = () => {
    return storyLine.choices.map((c) => {
      return <Option key={c.id} choice={c} navStoryLine={navStoryLine} />;
    });
  };

  const trimmedChoices =
    mappedChoices().length > 4 ? mappedChoices().slice(0, 4) : mappedChoices();

  //TODO: Take storyLine.id and send it on save button click
  // Update localStorage
  // Update Redux
  // Update database

  // Could probably either make a custom redux method,
  // or even just call the setActiveStory and update with the new id?
  const saveData = async (id) => {
    const config = {
      method: "PATCH",
      body: JSON.stringify({
        current_story_line: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const r = await fetch(`/stories/${activeStory.id}`, config);
    const updatedStory = await r.json();
    dispatch(setActiveStory(updatedStory));
  };

  // debugger;
  const goHome = () => {
    navigate("/homepage");
  };

  // I have my active character set in REDUX
  // So here instead of grabbing all the story_lines I could do either one of two things

  // 1. Grab the route from the backend that has a custom method organizing the storylines based on the active_chars background
  // 2. Filter through all of the storylines and return only the ones that have a reference to the background (this will require another storyline attribute?)

  // // Think about how to track the active_storyline as well, could be another attribute in the REDUX USER SLICE. SO we can use our continue button

  // The BELOW function fetchStory could take a param of the active character perhaps? maybe an optional param of the ACTIVE STORYLINE

  // MORE COMPONENTS
  // OPTION CONTAINER
  // OPTION COMPONENT

  //TODO: How do I add all the options and choices to the specific character's STORY instance and keep track of that associated data.
  // // The storylines themselves will all be hard coded and seeded in my database

  return (
    <div className="storyline-container">
      <div className="story-dialogue-container">
        <div className="game-nav">
          <button onClick={goHome}>HOME</button>
          <button onClick={() => saveData(storyLine.id)}>SAVE</button>
        </div>
        <Dialogue storyLine={storyLine} />
      </div>

      <div className="options-container">{trimmedChoices}</div>
      <div className="inventory-container"></div>
    </div>
  );
}

export default Storyline;
