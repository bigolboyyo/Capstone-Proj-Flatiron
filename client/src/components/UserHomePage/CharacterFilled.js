import React from "react";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

function CharacterFilled({ char, idx }) {
  const navigate = useNavigate();

  const grabStorage = () => {
    return JSON.parse(localStorage.getItem("user_data"));
  };

  const storage = grabStorage();

  const fetchUsrChars = async () => {
    const r = await fetch("/usr-chars");
    const chars = await r.json();
    const chosenChar = chars.find((c) => c.id === char.id);
    return chosenChar;
  };

  const returnToStory = async () => {
    const char = await fetchUsrChars();
    console.log(char);
    const config = {
      method: "POST",
      body: JSON.stringify({ character_id: char.id }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const r = await fetch("/cur-story", config);
    const curStoryLine = await r.json();

    navigate("/storyline");
  };

  const handleCharDeletion = async () => {
    const config = {
      method: "DELETE",
    };
    fetch(`/characters/${char.id}`, config)
      .then((r) => r.text())
      .then((res) => {
        const localCopy = JSON.parse(localStorage.getItem("user_data"));

        localCopy.active_character = {
          id: null,
          character_name: "",
          background: "",
        };
        localCopy.current_storyline = null;
        localCopy.active_story = {
          id: null,
          character_id: null,
          starting_point: "",
        };
        const copyString = JSON.stringify(localCopy);
        localStorage.setItem("user_data", copyString);
        window.location.reload();
      });
  };

  return (
    <h1 key={idx}>
      {char.character_name} ---- {char.background}{" "}
      <button onClick={returnToStory}>Continue</button>{" "}
      <button onClick={handleCharDeletion}>Delete</button>
    </h1>
  );
}

export default CharacterFilled;
