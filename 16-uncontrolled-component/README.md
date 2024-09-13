# 🚀 16: Uncontrolled Component (Text Input)

## 📝 Objective

Learn how to create an uncontrolled input component in React, where the input's value is handled by the DOM instead of the React state.

## 📂 Example Code

### Creating the Uncontrolled Input Component

```jsx
import React, { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Text:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledInput;
```

### Integrating the Component

In `App.js`, use the `UncontrolledInput` component:

```jsx
import React from "react";
import UncontrolledInput from "./components/UncontrolledInput";

function App() {
  return (
    <div className="App">
      <UncontrolledInput />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **Uncontrolled Component**: The input value is not controlled by React state. Instead, it’s directly handled by the DOM using a `ref`.
- **useRef Hook**: The `useRef` hook is used to access the input field's current value (`inputRef.current.value`).
- **Form Submission**: When the form is submitted, the input's value is accessed via the `ref` and displayed in an alert.

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

Go to [http://localhost:3000](http://localhost:3000) to test the uncontrolled input component.

## Happy coding! 🎉
