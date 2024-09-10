# 🚀 10 - Theme Switcher Component

## 📝 Objective

Learn how to create a theme switcher in React, allowing users to toggle between light and dark modes.

## 📂 Example Code

### Creating the ThemeSwitcher Component

```jsx
import React, { useState } from "react";

const ThemeSwitcher = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyles = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#000",
    padding: "20px",
    textAlign: "center",
    height: "100vh",
  };

  return (
    <div style={themeStyles}>
      <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
```

### Integrating the Component

In `App.js`, use the `ThemeSwitcher` component:

```jsx
import React from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <ThemeSwitcher />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **State Management**: The `isDarkMode` state determines whether the dark or light theme is active.
- **Toggling the Theme**: The `toggleTheme` function switches the value of `isDarkMode`, updating the UI based on the current mode.
- **Dynamic Styling**: The `themeStyles` object adjusts the background and text colors based on the selected mode.

## 🚀 Running the Application

### Install Dependencies (if not done yet):

```bash
npm install
```

### Start the Development Server:

```bash
npm start
```

### View the Application:

Go to [http://localhost:3000](http://localhost:3000) to see the theme switcher in action.

## Happy coding! 🎉

