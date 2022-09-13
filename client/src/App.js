import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
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
        <Route path="/testing" element={<h1>Test Route: PRE SKELETON</h1>} />

        <Route path="/" element={<h1>Page Count: {count}</h1>} />
      </Routes>
    </div>
  );
}

export default App;
