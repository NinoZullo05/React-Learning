# 🚀 23: Creating Custom Hooks

## 📝 Objective

Learn how to create reusable logic by developing custom hooks in React.

## 📂 Example Code

### Creating a Custom Hook

A custom hook is just a JavaScript function that uses one or more built-in React hooks. Here’s an example of a custom hook that handles form input.

#### Custom Hook: `useInput`

```jsx
import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    reset,
  };
};

export default useInput;
```

````

### Using the Custom Hook

Now, let’s use the custom `useInput` hook in a form component to manage input fields.

#### Form Component: `CustomForm`

```jsx
import React from "react";
import useInput from "../hooks/useInput";

const CustomForm = () => {
  const nameInput = useInput("");
  const emailInput = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameInput.value}, Email: ${emailInput.value}`);
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" {...nameInput} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" {...emailInput} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
```

### Integrating the Custom Hook with the App

In `App.js`, use the `CustomForm` component.

```jsx
import React from "react";
import CustomForm from "./components/CustomForm";

function App() {
  return (
    <div className="App">
      <CustomForm />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **Custom Hook (`useInput`)**: The `useInput` hook encapsulates the logic for managing input fields, including state handling and resetting the input.
- **Reusability**: The `useInput` hook is reusable for any input field, as seen with both the `name` and `email` fields.
- **Return Value**: The hook returns an object that can be spread directly into the input field using `{...nameInput}`, providing both value and onChange handler.

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

Go to [http://localhost:3000](http://localhost:3000) and try out the form, using the custom hook to manage inputs.

## Happy coding! 🎉
