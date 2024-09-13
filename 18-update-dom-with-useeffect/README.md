# 🚀 18: Updating the DOM with useEffect

## 📝 Objective

Learn how to update the DOM directly in a React component using the `useEffect` hook, typically for scenarios like setting document titles, managing focus, or manipulating other DOM elements outside React’s virtual DOM.

## 📂 Example Code

### Creating the Component

```jsx
import React, { useEffect, useState } from "react";

const DOMUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Update the document title with the count value whenever it changes
    document.title = `You clicked ${count} times`;

    // Optionally, clean up the effect when the component unmounts
    return () => {
      document.title = "React App"; // Reset to default when unmounted
    };
  }, [count]); // Run the effect when `count` changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default DOMUpdater;
```

### Integrating the Component

In `App.js`, use the `DOMUpdater` component:

```jsx
import React from "react";
import DOMUpdater from "./components/DOMUpdater";

function App() {
  return (
    <div className="App">
      <DOMUpdater />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **useEffect Hook**: The `useEffect` hook is used to update the document’s title each time the `count` value changes.
- **Dependency Array**: By including `[count]` as a dependency, the effect runs only when the `count` state changes.
- **Side Effects**: This demonstrates how to handle side effects (like updating the DOM) in React, which typically isn’t managed by React itself.

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

Go to [http://localhost:3000](http://localhost:3000) and watch the document title update as you interact with the button.

## Happy coding! 🎉
