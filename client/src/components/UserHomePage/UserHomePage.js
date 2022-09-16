import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./UserHomePage.css";
import CharacterSlot from "./CharacterSlot";

function UserHomePage({ logout }) {
  const user = {
    id: useSelector((state) => state.user.id),
    username: useSelector((state) => state.user.username),
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
          <div className="character-creation">
            <CharacterSlot />
            <CharacterSlot />
            <CharacterSlot />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHomePage;
