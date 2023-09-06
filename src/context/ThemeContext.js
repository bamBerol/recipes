import React from "react";

const ThemeContext = React.createContext({
  color: "blue",
  changeTheme: () => {},
});

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
