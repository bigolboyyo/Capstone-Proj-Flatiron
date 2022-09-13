import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/AuthPage/Login";
import UserHomePage from "./components/UserHomePage/UserHomePage";
import Background from "./components/BackgroundPage/Background";
import Storyline from "./components/StoryLinePage/Storyline";
import Adventure from "./components/AdventurePage/Adventure";
import EndState from "./components/EndStatePage/EndState";

function App() {
  const [user, setUser] = useState({});
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleLoginSubmit = async (creds) => {
    const config = {
      method: "POST",
      body: JSON.stringify(creds),
      headers: {
        "Content-Type": "application/json",
      },
    };
    let r = await fetch("/login", config);
    r = await r.json();
    if (r.ok) {
      const { token } = r;
      localStorage.setItem("token", JSON.stringify(token));
      setUser(r);
      navigate("/homepage");
    } else {
      const { error } = r;
      setErrors([...error]);
      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Login errors={errors} onLogin={handleLoginSubmit} />}
        />
        <Route path="/homepage" element={<UserHomePage user={user} />} />
        <Route path="/background" element={<Background />} />
        <Route path="/adventure-start" element={<Adventure />} />
        <Route path="/storyline" element={<Storyline />} />
        <Route path="/endstate" element={<EndState />} />
      </Routes>
    </div>
  );
}

export default App;
