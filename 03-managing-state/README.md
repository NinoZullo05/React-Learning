# 🚀 Exercise 3: Managing State with `useState`

## 📝 Objective

Create a simple counter component that increments its value each time a button is clicked, demonstrating the use of the `useState` hook for state management in React.

## 📂 Example Code

### Creating the Counter Component

Let's start by creating a React component that includes a counter and a button to increment its value.

```jsx
import React, { useState } from "react";

const UseStateComponent = () => {
  // Initialize state with useState
  const [count, setCount] = useState(0);

  // Function to handle button click
  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter value : {counter}</h1>
      <button onClick={incrementCounter}>Add 1 to counter!</button>
    </div>
  );
};
export default UseStateComponent;
```

### Integrating the Component

To see your counter in action, you need to use this component in your main application. Open the `App.js` file and import your new component.

```jsx
import "./App.css";
import UseStateComponent from "./components/UseState";

function App() {
  return (
    <div className="App">
      <UseStateComponent />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

1. **Using `useState`**: The `useState` hook is used to create a piece of state (`count`) and a function to update it (`setCount`). We initialize `count` to `0`.

2. **Handling Button Click**: The `increment` function updates the `count` state by incrementing it by 1. This function is called each time the button is clicked.

3. **Rendering**: The `Counter` component displays the current value of `count` and includes a button that triggers the `increment` function when clicked.

## 🚀 Running the Application

To see your counter component in action, follow these steps:

1. **Open a Terminal**: Navigate to your project directory.

2. **Install Dependencies**: If you haven’t already, install the project dependencies by running:

   ```bash
   npm install
   ```

3. **Start the Development Server**: Run the following command to start your React application:

   ```bash
   npm start
   ```

4. **View the Application**: Open your web browser and go to `http://localhost:3000`. You should see the counter displayed with a button to increment its value.

## Happy coding! 🎉
