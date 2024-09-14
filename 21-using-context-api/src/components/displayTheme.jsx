import React, { useContext } from "react";
import { ThemeContext } from "./themeProvider";

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default DisplayTheme;
