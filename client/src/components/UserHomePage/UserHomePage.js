import React from "react";
import { Button, Container } from "react-bootstrap";
import "./UserHomePage.css";

function UserHomePage({ user, logout }) {
  return (
    <div className="home-div">
      <Button className="logout-btn" onClick={logout}>
        Logout
      </Button>
      <Container className="user-home-interface-container">
        <h1>{user.username}</h1>
      </Container>
    </div>
  );
}

export default UserHomePage;
