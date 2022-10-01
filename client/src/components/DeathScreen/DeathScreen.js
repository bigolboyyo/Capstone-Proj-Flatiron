import React from "react";
import { useNavigate } from "react-router-dom";

export default function DeathScreen() {
  const navigate = useNavigate();

  const homeAfterDeath = () => {
    navigate("/homepage");
  };

  return (
    <div>
      <h2>YOU HAVE DIED</h2>
      <button onClick={homeAfterDeath}>Restart</button>
    </div>
  );
}
