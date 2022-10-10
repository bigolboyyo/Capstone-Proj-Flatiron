import React from "react";
import "./DeathScreen.css";
import { useNavigate } from "react-router-dom";

export default function DeathScreen() {
  const navigate = useNavigate();

  const homeAfterDeath = () => {
    navigate("/homepage");
  };

  return (
    <div className="death-text">
      <h2>YOU HAVE DIED...</h2>
      <p>Your character has been deleted from existence...</p>
      <button onClick={homeAfterDeath}>Try Again</button>
    </div>
  );
}
