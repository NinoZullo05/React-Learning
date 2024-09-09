# 🚀 08: Nested Components

## 📝 Objective

Learn how to nest components in React, breaking down the UI into smaller, reusable components.

## 📂 Example Code

### Creating the Parent Component

```jsx
import ChildComponent from "./childComponent";

const ParentComponent = () => {
  return (
    <>
      <h1>This is Parent Component!</h1>
      <ChildComponent />
    </>
  );
};
export default ParentComponent;
```

### Creating the Child Component

```jsx
const ChildComponent = () => {
  return (
    <>
      <h2>This is the childComponent!</h2>
    </>
  );
};

export default ChildComponent;
```

### Integrating the Components

In `App.js`, use the `ParentComponent`:

```jsx
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

- **Parent and Child Relationship**: The `ParentComponent` renders the `ChildComponent` inside of it.
- **Component Nesting**: Components can be composed together, allowing reusable code structures and modular UI designs.

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

Go to [http://localhost:3000](http://localhost:3000) to see your nested components in action.

## Happy coding! 🎉
