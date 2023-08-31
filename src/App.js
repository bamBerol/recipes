import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StartPage from "./layout/StartPage/StartPage";
import FullLayout from "./layout/fullLayout/FullLayout";

import "./App.css";

function App() {
  const [isStartClicked, setIsStartClicked] = useState(false);

  const handleStartPageClick = () => {
    setIsStartClicked(true);
  };

  const start = isStartClicked ? (
    <FullLayout />
  ) : (
    <StartPage startClick={handleStartPageClick} />
  );

  return (
    <Router>
      <div className="App">{start}</div>
    </Router>
  );
}

export default App;
