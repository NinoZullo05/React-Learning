# 🚀 21: Using Context API

## 📝 Objective

Learn how to use React's Context API to pass data through the component tree without having to pass props manually at every level.

## 📂 Example Code

### Creating the Context

First, create a context to hold the shared data.

```jsx
import React, { createContext, useState } from "react";

// Create a context with default value
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

### Using Context in Components

Now, create components that consume the context.

#### Component that Displays the Theme

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const DisplayTheme = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default DisplayTheme;
```

#### Component that Toggles the Theme

```jsx
import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ToggleThemeButton;
```

### Integrating Components with Context Provider

In `App.js`, wrap the components with the `ThemeProvider` to provide context to the entire app.

```jsx
import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import DisplayTheme from "./components/DisplayTheme";
import ToggleThemeButton from "./components/ToggleThemeButton";

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
```

## 🔍 How It Works

- **Context Creation**: `ThemeContext` is created using `createContext` to store the current theme and a function to toggle between light and dark modes.
- **Providing Context**: The `ThemeProvider` component wraps its children and provides them with access to the theme and the `toggleTheme` function.
- **Consuming Context**: Components like `DisplayTheme` and `ToggleThemeButton` consume the context using the `useContext` hook, allowing them to access and modify the shared state.

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

Go to [http://localhost:3000](http://localhost:3000) to toggle the theme and see how the context updates the display across components.

## Happy coding! 🎉
