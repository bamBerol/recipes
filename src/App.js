import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import StartPage from "./layout/StartPage/StartPage";
import FullLayout from "./layout/fullLayout/FullLayout";
import ThemeContext from "./context/ThemeContext";

import "./App.css";

function App() {
  const [isStartClicked, setIsStartClicked] = useState(false);
  const [themeColor, setThemeColor] = useState("blue");

  const handleStartPageClick = () => {
    setIsStartClicked(true);
  };

  const handleChangeTheme = (theme) => {
    setThemeColor(theme);
  };

  const start = isStartClicked ? (
    <FullLayout />
  ) : (
    <StartPage startClick={handleStartPageClick} />
  );

  return (
    <Router>
      <ThemeContext.Provider
        value={{ color: themeColor, changeTheme: handleChangeTheme }}>
        <div className="App">{start}</div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
