# 🚀 19: Persisting Data with localStorage

## 📝 Objective

Learn how to persist data across page reloads by using the browser's `localStorage` in React.

## 📂 Example Code

### Creating the Component

```jsx
import React, { useState, useEffect } from "react";

const LocalStorageExample = () => {
  const [name, setName] = useState(() => {
    // Retrieve saved name from localStorage, if available
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    // Update localStorage whenever the name state changes
    localStorage.setItem("name", name);
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Persisted Name: {name}</p>
    </div>
  );
};

export default LocalStorageExample;
```

### Integrating the Component

In `App.js`, use the `LocalStorageExample` component:

```jsx
import React from "react";
import LocalStorageExample from "./components/LocalStorageExample";

function App() {
  return (
    <div className="App">
      <LocalStorageExample />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **Persisting Data**: The `localStorage.getItem()` method is used to retrieve any previously saved value, and `localStorage.setItem()` is used to save the `name` value every time it changes.
- **State Initialization**: The initial state of `name` is set by checking if a value already exists in `localStorage`.
- **useEffect Hook**: The `useEffect` hook ensures that whenever the `name` state updates, the value is saved in `localStorage`.

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

Go to [http://localhost:3000](http://localhost:3000) and enter a name. Refresh the page to see the name persist using `localStorage`.

## Happy coding! 🎉
