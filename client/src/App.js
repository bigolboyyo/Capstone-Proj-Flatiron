import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/AuthPage/Login";
import UserHomePage from "./components/UserHomePage/UserHomePage";
import Background from "./components/BackgroundPage/Background";
import Storyline from "./components/StoryLinePage/Storyline";
import Adventure from "./components/AdventurePage/Adventure";
import EndState from "./components/EndStatePage/EndState";

// PRE-SKELETON BRANCH BEGINNING...
// TESTING AUTO DEPLOYMENT...

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/homepage" element={<UserHomePage />} />
        <Route path="/background" element={<Background />} />
        <Route path="/adventure-start" element={<Adventure />} />
        <Route path="/storyline" element={<Storyline />} />
        <Route path="/endstate" element={<EndState />} />
      </Routes>
    </div>
  );
}

export default App;
