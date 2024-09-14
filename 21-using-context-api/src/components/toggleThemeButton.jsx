import { useContext } from "react";
import { ThemeContext } from "./themeProvider";

const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleThemeButton;
