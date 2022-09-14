import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "./UserHomePage.css";

function UserHomePage({ logout }) {
  const user = {
    id: useSelector((state) => state.user.id),
    username: useSelector((state) => state.user.username),
  };

  return (
    <div className="home-div">
      <Button className="logout-btn" onClick={logout}>
        Logout
      </Button>
      <div className="user-home-interface-container">
        <h1>{user.id}</h1>
        <h1>{user.username}</h1>
      </div>
    </div>
  );
}

export default UserHomePage;
