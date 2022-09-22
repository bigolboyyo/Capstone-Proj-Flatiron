import React, { useEffect, useState } from "react";
import Dialogue from "../Dialogue/Dialogue";
import Option from "../Option/Option";
import "../StoryLinePage/Storyline.css";

function Storyline() {
  const [story, setStory] = useState([]);
  const [storyLine, setStoryLine] = useState([]);
  const [choices, setChoices] = useState([]);

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
