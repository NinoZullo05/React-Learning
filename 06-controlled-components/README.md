# 🚀 06: Controlled Component (Text Input)

## 📝 Objective

Learn how to create a controlled input component in React, where the component’s state is bound to the input's value and updated on every change.

## 📂 Example Code

### Creating the Component

```jsx
import { useState } from "react";
const ControlledInput = () => {
  const [inputValue, setInputValue] = useState();

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={changeValue} />
      <p>Current value: {inputValue}</p>
    </>
  );
};

export default ControlledInput;
```

### Integrating the Component

In `App.js`, use this component:

```jsx
import "./App.css";
import ControlledInput from "./components/controlledInputs";
function App() {
  return (
    <div className="App">
      <ControlledInput />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **State Binding**: The input value is controlled by the `inputValue` state using `useState`.
- **Updating the State**: On every keystroke, `handleChange` updates the state with the new value.
- **Displaying Input**: The typed text is shown in real-time below the input.

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

Go to [http://localhost:3000](http://localhost:3000) to see your controlled input in action.

## Happy coding! 🎉
