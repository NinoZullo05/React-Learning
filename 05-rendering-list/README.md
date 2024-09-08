# 🚀 05: Rendering Lists in React

## 📝 Objective

Learn how to dynamically render lists in React using the `.map()` method to iterate through arrays and display the data as JSX.

## 📂 Example Code

Creating the Component

```jsx
import React from "react";

const RenderingList = () => {
  const items = ["Apple", "Banana", "Orange", "Peach"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {index} {item}
        </li>
      ))}
    </ul>
  );
};

export default RenderingList;
```

Integrating the Component
In `App.js`, use this component:

```jsx
import "./App.css";
import RenderingList from "./components/renderingList";
function App() {
  return (
    <div className="App">
      <RenderingList />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

<b>Array Mapping: </b> The `.map()` method is used to iterate through the `items` array.

<b> Rendering </b>: Each element of the array is rendered as a `<li>` inside a `<ul>`.

<b> Key Prop </b>: A `key` prop is provided for each list item to help React identify which items have changed, added, or removed.

## 🚀 Running the Application

<b> Install Dependencies (if not done yet): </b>

```bash
npm install
```

<b> Start the Development Server: </b>

```bash
npm start
```

View the Application: Go to ```http://localhost:3000``` to see the list rendered dynamically.

---

## Happy coding! 🎉
