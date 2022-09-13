import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/AuthPage/Login";
import SignUp from "./components/AuthPage/SignUp";
import UserHomePage from "./components/UserHomePage/UserHomePage";
import Background from "./components/BackgroundPage/Background";
import Storyline from "./components/StoryLinePage/Storyline";
import Adventure from "./components/AdventurePage/Adventure";
import EndState from "./components/EndStatePage/EndState";
import Root from "./components/Root/Root";

function App() {
  const [user, setUser] = useState(false);
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
    const r = await fetch("/login", config);
    const userData = await r.json();
    if (r.ok) {
      //const { token } = r;
      localStorage.setItem("user_data", JSON.stringify(userData));
      setUser(userData);
      navigate("/homepage");
    } else {
      const { errors } = r;
      setErrors([...errors]);
      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
  };

  const handleSignUpSubmit = async (creds) => {
    const config = {
      method: "POST",
      body: JSON.stringify(creds),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const r = await fetch("/signup", config);
    debugger;
    const userData = await r.json();
    if (r.ok) {
      debugger;
      //const { token } = r;
      localStorage.setItem("user_data", JSON.stringify(userData));
      setUser(userData);
      navigate("/homepage");
    } else {
      const { errors } = r;
      setErrors([...errors]);
      setTimeout(() => {
        setErrors([]);
      }, 5000);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("user_data")) {
      navigate("/login");
    } else {
      setUser(JSON.parse(localStorage.getItem("user_data")));
      navigate("/homepage");
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/login" element={<Login onLogin={handleLoginSubmit} />} />
        <Route
          path="/signup"
          element={<SignUp onSignUp={handleSignUpSubmit} />}
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
