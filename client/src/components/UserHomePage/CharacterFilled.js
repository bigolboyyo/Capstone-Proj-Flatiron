import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  setActiveCharacter,
  setActiveStory,
  setActiveStoryLine,
} from "../../features/user/userSlice";
import { useDispatch } from "react-redux";

function CharacterFilled({ char, idx }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [editSwitch, setEditSwitch] = useState(false);
  const [nameChange, setNameChange] = useState(char.character_name);
  const [charName, setCharName] = useState("");

  const fetchUsrChars = async () => {
    const r = await fetch("/usr-chars");
    const chars = await r.json();
    const chosenChar = chars.find((c) => c.id === char.id);
    return chosenChar;
  };

  const returnToStory = async () => {
    const char = await fetchUsrChars();
    const config = {
      method: "POST",
      body: JSON.stringify({ character_id: char.id }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const r = await fetch("/cur-story", config);
    const storyData = await r.json();
    dispatch(setActiveCharacter(char));
    dispatch(setActiveStory(storyData.cur_story));
    dispatch(setActiveStoryLine(storyData.active_story_line));
    navigate("/storyline");
  };

  const editCharName = async (charId) => {
    const config = {
      method: "PATCH",
      body: JSON.stringify({ character_name: charName }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (charName.length > 0) {
      const r = await fetch(`/characters/${char.id}`, config);
      const changedCharName = await r.json();
      setNameChange(changedCharName.character_name);
    } else {
      setEditSwitch(false);
    }
  };

  useEffect(() => {
    setEditSwitch(false);
  }, [nameChange]);

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

  const edit = (e) => {
    e.preventDefault();
    editCharName(char.id);
  };

  return (
    <div className="character-slot" key={idx}>
      {char.character_name !== nameChange ? nameChange : char.character_name}{" "}
      ---- {char.background}{" "}
      <button className="char-button" onClick={returnToStory}>
        <p className="btn-text">Continue</p>
      </button>{" "}
      {editSwitch ? (
        <>
          <input
            onChange={(e) => setCharName(e.target.value)}
            value={charName}
          ></input>
          <button className="char-button" onClick={(e) => edit(e)}>
            <p className="btn-text">Change</p>
          </button>
        </>
      ) : (
        <button className="char-button" onClick={() => setEditSwitch(true)}>
          <p className="btn-text">Edit</p>
        </button>
      )}
      <button className="char-button" onClick={handleCharDeletion}>
        <p className="btn-text">Delete</p>
      </button>
    </div>
  );
}

export default CharacterFilled;
