import React, { useEffect, useState } from "react";
import Dialogue from "../Dialogue/Dialogue";
import Option from "../Option/Option";
import "../StoryLinePage/Storyline.css";

function Storyline() {
  const [storyLines, setStoryLines] = useState([]);
  const [choices, setChoices] = useState([]);

  const fetchStoryLines = async () => {
    const r = await fetch("/story_lines");
    const story = await r.json();
    setStoryLines(story);
    debugger;
    setChoices(story[1].choices);
  };

  console.log(choices);
  console.log(storyLines);

  // const condGrabChoices = () => {
  //   return storyLines.length === 0 ? null : setChoices(storyLines[0].choices);
  // };

  //console.log(storyLines);

  // useEffect(() => {
  //   condGrabChoices();
  // }, [storyLines]);

  //console.log(choices);

  const mappedChoices = () => {
    return choices.map((c) => {
      return <Option key={c.id} choice={c} />;
    });
  };

  // MORE COMPONENTS
  // OPTION CONTAINER
  // OPTION COMPONENT
  return (
    <div className="storyline-container">
      <button onClick={fetchStoryLines}>Fetch</button>
      <div className="story-dialogue-container">
        {storyLines.length === 0 ? null : <Dialogue story={storyLines} />}
      </div>

      <div className="options-container">{mappedChoices()}</div>
      <div className="inventory-container"></div>
    </div>
  );
}

export default Storyline;
