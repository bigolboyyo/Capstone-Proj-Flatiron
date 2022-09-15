import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./UserHomePage.css";
import { useNavigate } from "react-router-dom";

function UserHomePage({ logout }) {
  const user = {
    id: useSelector((state) => state.user.id),
    username: useSelector((state) => state.user.username),
  };
  const navigate = useNavigate();

  const navigateToCreation = () => {
    navigate("/background");
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
            <h1>
              [Empty Character Slot] ------{" "}
              <button onClick={navigateToCreation}>Create Character</button>
            </h1>
            <h1>
              [Empty Character Slot] ------{" "}
              <button onClick={navigateToCreation}>Create Character</button>
            </h1>
            <h1>
              [Empty Character Slot] ------{" "}
              <button onClick={navigateToCreation}>Create Character</button>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHomePage;
