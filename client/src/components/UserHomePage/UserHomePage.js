import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { grabAllStories } from "../../features/user/userSlice";
import { Button } from "react-bootstrap";
import "./UserHomePage.css";
import CharacterSlot from "./CharacterSlot";
import CharacterFilled from "./CharacterFilled";
import { v4 as uuidv4 } from "uuid";

function UserHomePage({ logout }) {
  const [characters, setCharacters] = useState([]);

  const grabStorage = () => {
    return JSON.parse(localStorage.getItem("user_data"));
  };
  const storage = grabStorage();

  const dispatch = useDispatch();

  const user = {
    id: useSelector((state) => state.user.id),
    username: useSelector((state) => state.user.username),
    active_character: storage.active_character,
    active_story: storage.active_story,
    current_storyline: storage.current_storyline,
  };

  const fetchStories = async () => {
    const r = await fetch("/story_lines");
    const stories = await r.json();
    dispatch(grabAllStories(stories));
  };

  const fetchUserCharacters = async () => {
    const r = await fetch("/usr-chars");
    const chars = await r.json();
    if (r.ok) {
      setCharacters(chars);
    } else {
      const { errors } = chars;
      console.log(errors);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  useEffect(() => {
    fetchUserCharacters();
  }, []);

  const maxThree = (chars, maxLength) => {
    let result = [];
    let diff = maxLength - chars.length;
    for (let i = 0; i < chars.length; i++) {
      result.push(<CharacterFilled char={chars[i]} idx={i} key={i} />);
    }

    const createCharSlots = () => {
      let arr = [];
      for (let i = 0; i < diff; i++) {
        arr.push(<CharacterSlot key={uuidv4()} />);
      }
      return arr;
    };

    result = result.concat(createCharSlots());
    return result;
  };

  return (
    <>
      <div className="home-div">
        <div className="user-home-interface-container">
          <Button className="logout-btn" onClick={logout}>
            Logout
          </Button>
          <div className="home-title">
            <h1>{user.username}</h1>
            {/* <p>{user.active_character.character_name}</p> */}
            {/* <p>{user.current_storyline}</p> */}
          </div>
          <div className="character-creation">
            {characters.length === 0 ? (
              <>
                <CharacterSlot />
                <CharacterSlot />
                <CharacterSlot />
              </>
            ) : (
              maxThree(characters, 3)
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHomePage;
