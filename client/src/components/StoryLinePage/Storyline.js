import React, { useEffect, useState } from "react";
import Dialogue from "../Dialogue/Dialogue";
import Option from "../Option/Option";
import "../StoryLinePage/Storyline.css";
import { useSelector } from "react-redux";

function Storyline() {
  const [story, setStory] = useState([]);
  const [storyLine, setStoryLine] = useState([]);
  const [choices, setChoices] = useState([]);

  const activeChar = useSelector((state) => state.user.active_character);
  console.log(activeChar);
  // I have my active character set in REDUX
  // So here instead of grabbing all the story_lines I could do either one of two things

  // 1. Grab the route from the backend that has a custom method organizing the storylines based on the active_chars background
  // 2. Filter through all of the storylines and return only the ones that have a reference to the background (this will require another storyline attribute?)

  // // Think about how to track the active_storyline as well, could be another attribute in the REDUX USER SLICE. SO we can use our continue button

  // The BELOW function fetchStory could take a param of the active character perhaps? maybe an optional param of the ACTIVE STORYLINE
  const fetchStory = async () => {
    const r = await fetch("/story_lines");
    const story = await r.json();
    setStory(story);
    setStoryLine(story[0]);
    setChoices(story[0].choices);
  };

  useEffect(() => {
    fetchStory();
  }, []);

  const navStoryLine = (id) => {
    setStoryLine(story[id]);
    setChoices(story[id].choices);
  };

  const mappedChoices = () => {
    return choices.map((c) => {
      return <Option key={c.id} choice={c} navStoryLine={navStoryLine} />;
    });
  };

  // MORE COMPONENTS
  // OPTION CONTAINER
  // OPTION COMPONENT
  return (
    <div className="storyline-container">
      <div className="story-dialogue-container">
        {story.length === 0 ? null : <Dialogue storyLine={storyLine} />}
      </div>

      <div className="options-container">{mappedChoices()}</div>
      <div className="inventory-container"></div>
    </div>
  );
}

export default Storyline;
