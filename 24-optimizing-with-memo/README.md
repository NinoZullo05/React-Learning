# 🚀 Optimizing with React.memo

## 📝 Objective

Learn how to optimize React components for performance using `React.memo` to prevent unnecessary re-renders.

## 📂 Example Code

### Creating a Memoized Component

`React.memo` is used to wrap components that don’t need to re-render unless their props change.

#### Non-Memoized Component

Here’s a basic `ChildComponent` that will re-render every time its parent re-renders, even if its props haven’t changed.

```jsx
import React from "react";

const ChildComponent = ({ value }) => {
  console.log("ChildComponent rendered");
  return <p>Value: {value}</p>;
};

export default ChildComponent;
```

#### Memoized Component

To prevent unnecessary re-renders, wrap `ChildComponent` with `React.memo`.

```jsx
import React from "react";

const ChildComponent = React.memo(({ value }) => {
  console.log("Memoized ChildComponent rendered");
  return <p>Value: {value}</p>;
});

export default ChildComponent;
```

### Parent Component to Test Memoization

Create a parent component that renders the `ChildComponent` and updates state that the child doesn’t depend on.

```jsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Hello, World!");

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <ChildComponent value={value} />
    </div>
  );
};

export default ParentComponent;
```

### Integrating the Memoized Component in `App.js`

Now, use the `ParentComponent` in the main application.

```jsx
// App.js
import React from "react";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **React.memo**: This higher-order component (HOC) optimizes the `ChildComponent` by memoizing it, meaning it will only re-render when its props change.
- **Unnecessary Re-renders**: Without `React.memo`, `ChildComponent` would re-render every time the parent component re-renders, even if the `value` prop doesn’t change.
- **Performance Gains**: By preventing re-renders, `React.memo` can improve the performance of large or frequently updated apps.

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

Go to [http://localhost:3000](http://localhost:3000) and notice that `ChildComponent` only re-renders when the `value` prop changes, not when the parent state (`count`) changes.

## Happy coding! 🎉
