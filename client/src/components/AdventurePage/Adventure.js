import React, { useEffect } from "react";
import "./Adventure.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LawyerIntro from "./LawyerIntro";
import OtakuIntro from "./OtakuIntro";
import VagrantIntro from "./VagrantIntro";

function Adventure() {
  const navigate = useNavigate();

  const activeChar = useSelector((state) => state.user.active_character);
  const background = activeChar.background;

  const startAdventure = () => {
    navigate("/storyline");
  };

  const advIntro = () => {
    if (background === "lawyer") {
      return <LawyerIntro char={activeChar} />;
    }

    if (background === "vagrant") {
      return <VagrantIntro char={activeChar} />;
    }

    if (background === "otaku") {
      return <OtakuIntro char={activeChar} />;
    }
  };

  const allItems = async () => {
    const r = await fetch("/items");
    const items = await r.json();

    localStorage.setItem("items", JSON.stringify(items));
  };

  useEffect(() => {
    allItems();
  }, []);

  return (
    <div className="adv-start-page">
      {advIntro()}
      <button onClick={startAdventure}>Start</button>
    </div>
  );
}

export default Adventure;
