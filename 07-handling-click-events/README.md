# 🚀 Handling Click Events

## 📝 Objective

Learn how to handle click events in React by creating a button that triggers a function when clicked.

## 📂 Example Code

### Creating the Component

```jsx
import React, { useState } from "react";

const HandleClick = () => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p>Button clicked: {clickCount} times</p>
    </>
  );
};

export default HandleClick;
```

### Integrating the Component

In `App.js`, use this component:

```jsx
import React from "react";
import HandleClick from "./components/handleClick";

function App() {
  return (
    <div className="App">
      <HandleClick />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **Click Event Handling**: The `handleClick` function is triggered every time the button is clicked.
- **State Update**: Each click increments the `clickCount` state by 1.
- **Displaying Click Count**: The number of times the button is clicked is displayed in real-time.

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

Go to [http://localhost:3000](http://localhost:3000) to see your click handler in action.

## Happy coding! 🎉
