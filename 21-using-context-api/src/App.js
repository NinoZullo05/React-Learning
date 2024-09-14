import React from "react";
import { ThemeProvider } from "./components/themeProvider";
import DisplayTheme from "./components/displayTheme";
import ToggleThemeButton from "./components/toggleThemeButton";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <DisplayTheme />
        <ToggleThemeButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
