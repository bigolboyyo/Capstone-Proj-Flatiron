import React from "react";
import { choiceNav } from "../../lib/choiceNav";
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
import { advanceStory } from "../../lib/advanceStory";
import Inventory from "../Inventory/Inventory";

function Storyline() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeChar = useSelector((state) => state.user.active_character);
  const activeStory = useSelector((state) => state.user.active_story);

  const reduxStories = useSelector((state) => state.user.all_stories);
  const localStories = JSON.parse(localStorage.getItem("stories"));
  const stories = reduxStories ? reduxStories : localStories;

  const reduxStoryLine = useSelector((state) => state.user.current_storyline);
  const localStoryLine = JSON.parse(
    JSON.parse(localStorage.getItem("user_data")).current_storyline
  );
  const actStoryLine = reduxStoryLine ? reduxStoryLine : localStoryLine;

  const storyLine = stories.find((s) => s.id === actStoryLine);

  const choiceCreation = async (background, option) => {
    const navID = option.story_line_id;
    await choiceNav(navID);
  };

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
    if (id === "TremorDeath" || id === "ScorpionDeath") {
      navigate("/death");
    } else {
      let nav = storyLine.id;
      await advanceStory(id, activeChar, nav);
      const option = JSON.parse(localStorage.getItem("options"));
      nav = option.story_line_id;
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
      dispatch(setActiveStoryLine(nav));
    }
  };

  const mappedChoices = () => {
    return storyLine.choices.map((c) => {
      return <Option key={c.id} choice={c} navStoryLine={navStoryLine} />;
    });
  };

  const trimmedChoices =
    mappedChoices().length > 4 ? mappedChoices().slice(0, 4) : mappedChoices();

  const goHome = () => {
    navigate("/homepage");
  };

  return (
    <div className="storyline-container">
      <div className="story-dialogue-container">
        <div className="game-nav">
          <button onClick={goHome}>HOME</button>
        </div>
        <Dialogue storyLine={storyLine} />
      </div>

      <div className="options-container">{trimmedChoices}</div>
      <div className="inventory-container">
        <Inventory invChange={trimmedChoices} />
      </div>
    </div>
  );
}

export default Storyline;
