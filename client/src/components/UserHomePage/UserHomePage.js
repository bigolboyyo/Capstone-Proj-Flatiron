import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./UserHomePage.css";
import CharacterSlot from "./CharacterSlot";
import CharacterFilled from "./CharacterFilled";

function UserHomePage({ logout }) {
  const user = {
    id: useSelector((state) => state.user.id),
    username: useSelector((state) => state.user.username),
  };

  const [characters, setCharacters] = useState([]);

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
    fetchUserCharacters();
  }, []);

  const charFilled = characters.map((c, i) => {
    return <CharacterFilled char={c} idx={i} />;
  });

  const maxThree = (chars, maxLength) => {
    for (let i = 0; i < chars.length; i++) {
      if (chars.length <= maxLength) {
        return <CharacterFilled char={chars[i]} idx={i} />;
      } else {
        return <CharacterSlot />;
      }
    }
  };

  return (
    <>
      <div className="home-div">
        <div className="user-home-interface-container">
          <Button className="logout-btn" onClick={logout}>
            Logout
          </Button>
          <h1>{user.id}</h1>
          <h1>{user.username}</h1>
          <div className="character-creation">{}</div>
        </div>
      </div>
    </>
  );
}

export default UserHomePage;
