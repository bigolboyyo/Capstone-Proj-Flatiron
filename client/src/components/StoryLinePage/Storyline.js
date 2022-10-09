import React, { useEffect } from "react";
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
import { setOptionStoryLine, updateChoices } from "../../features/optionSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { advanceStory } from "../../lib/advanceStory";
import Inventory from "../Inventory/Inventory";
import { scenario } from "../../lib/deathScenarios";

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

  const permaDeath = async () => {
    const config = {
      method: "DELETE",
    };
    const r = await fetch(`/characters/${activeChar.id}`, config);
    return r;
  };

  const navStoryLine = async (id) => {
    if (scenario(id)) {
      await permaDeath();
      navigate("/death");
    } else if (id === "DemoEnd") {
      navigate("/endstate");
    } else {
      let nav = storyLine.id;
      await advanceStory(id, activeChar, nav);
      const option = JSON.parse(localStorage.getItem("options"));
      nav = option.story_line_id;
      await choiceCreation(activeChar.background, option);
      // DISPATCHING TO SET ACTIVE STORY LINE BEFORE
      // // DOING ALL THE THINGS SEEMS TO HELP WITH FETCH/RENDER SPEED and prevents
      /// // the MachineCheck double choice render for whatever reason... must examine further
      dispatch(setActiveStoryLine(nav));
      await doAllTheThings(nav);
      // dispatch(updateChoices(curOption));
    }
  };

  const curOption = storyLine.options.find((option) => {
    return option.story_id === activeStory.id;
  });

  const curChoices = useSelector((state) => state.option.current_choices);

  const activeOption = curOption
    ? curOption
    : JSON.parse(localStorage.getItem("active_choice"));

  const mappedChoices = () => {
    const mapped = curChoices.map((c) => {
      // console.log(c);
      return <Option key={c.id} choice={c} navStoryLine={navStoryLine} />;
    });
    return mapped;
  };

  // const typedDialogue = typeWriter(storyLine.dialogue);

  useEffect(() => {
    dispatch(updateChoices(activeOption));
  }, [activeOption]);

  const goHome = () => {
    navigate("/homepage");
  };

  return (
    <div className="storyline-container">
      <div className="story-dialogue-container">
        <div className="game-nav">
          <button className="home-btn" onClick={goHome}>
            HOME
          </button>
        </div>
        <Dialogue storyLine={storyLine} />
      </div>

      <div className="options-container">{mappedChoices()}</div>
      <div className="inventory-container">
        <Inventory invChange={mappedChoices()} />
      </div>
    </div>
  );
}

export default Storyline;
