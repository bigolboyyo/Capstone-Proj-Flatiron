import React, { useEffect } from "react";
import "./Adventure.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LawyerIntro from "./LawyerIntro";
import OtakuIntro from "./OtakuIntro";
import VagrantIntro from "./VagrantIntro";
import { useDispatch } from "react-redux";

// This will be the adventure start page. The route after creating a character
// Will give info and starting details based around the background picked
// "The year is 2022 and you have just won the biggest case of your career... etc (lawyer background)"

// After user reads all the background dialogue a prompt for continuing onto (start button/arrow button/etc)
// // This will route the user to the very first storyline/option interaction page

// Story(The story will depend on the background picked) ->
// // Storyline (All characters, regardless of story, will start on storyline #1 for the story) ->
// // // Present Options to navigate(render) the new storyline dialogue and associated options

function Adventure() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Need access to the current character that was created
  // Add all this to redux store from the background page
  // Additionally the userHomepage will need access and conditionally render after redux user has characters

  // This needs to be updated in the backend
  // User needs validation so they can only create 3 characters max

  const activeChar = useSelector((state) => state.user.active_character);
  const background = activeChar.background;

  const actStory = useSelector((state) => state.user.active_story);
  const actStoryLine = useSelector((state) => state.user.current_storyline);

  // const [activeStory, setActiveStory] = useState([]);

  const startAdventure = () => {
    navigate("/storyline");
  };

  // const postStoryCreation = async () => {
  //   const startingStoryLine = () => {
  //     let start;
  //     if (background === "lawyer") {
  //       start = 0;
  //     }
  //     if (background === "vagrant") {
  //       start = 1;
  //     }
  //     if (background === "otaku") {
  //       start = 2;
  //     }
  //     return start;
  //   };

  //   const start = startingStoryLine();
  //   dispatch(setActiveStoryLine(start));

  //   const story = {
  //     starting_point: `${background} story line`,
  //     character_id: activeChar.id,
  //     current_story_line: start,
  //   };
  //   const config = {
  //     method: "POST",
  //     body: JSON.stringify(story),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   debugger;
  //   const r = await fetch("/stories", config);
  //   const activeStory = await r.json();
  //   dispatch(setActiveStory(activeStory));
  // };

  // useEffect(() => {
  //   postStoryCreation();
  // }, []);

  // Make a post request, onClick or useEffect???
  // Can grab the character's starting point with this post, and set the current_story_line based on that

  const advIntro = () => {
    if (background === "lawyer") {
      return <LawyerIntro char={activeChar} />;
    }

    if (background === "vagrant") {
      return <VagrantIntro char={activeChar} />;
    }

    if (background === "otaku") {
      return <OtakuIntro char={activeChar} />;
    }
  };

  // Can set redux store to have the active characters current storyline they are
  // This way when you hit continue from userhomepage, you return back to that storyline

  return (
    <div className="adv-start-page">
      {advIntro()}
      <button onClick={startAdventure}>Start</button>
    </div>
  );
}

export default Adventure;
