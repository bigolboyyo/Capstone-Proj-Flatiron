import React from "react";
import { Button } from "react-bootstrap";
import "./UserHomePage.css";

function UserHomePage({ user, logout }) {
  return (
    <div className="home-div">
      <Button className="logout-btn" onClick={logout}>
        Logout
      </Button>
      <div className="user-home-interface-container">
        <h1>{user.username}</h1>
      </div>
    </div>
  );
}

export default UserHomePage;
