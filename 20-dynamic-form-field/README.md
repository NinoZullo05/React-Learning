# 🚀 20: Dynamic Form Fields

## 📝 Objective

Learn how to dynamically add and remove form fields in a React component using state.

## 📂 Example Code

### Creating the Dynamic Form Component

```jsx
import React, { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  };

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleRemoveField = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Data: ${JSON.stringify(fields.map((field) => field.value))}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(index, e)}
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
```

### Integrating the Component

In `App.js`, use the `DynamicForm` component:

```jsx
import React from "react";
import DynamicForm from "./components/DynamicForm";

function App() {
  return (
    <div className="App">
      <DynamicForm />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **Dynamic Fields**: The `fields` state is an array that holds the values for each input field. The array is updated when fields are added, removed, or modified.
- **Add/Remove Fields**: Clicking "Add Field" appends a new input field, while clicking "Remove" deletes the corresponding field.
- **Form Submission**: When the form is submitted, the values of all fields are displayed in an alert in JSON format.

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

Go to [http://localhost:3000](http://localhost:3000) and dynamically add or remove form fields as needed.

## Happy coding! 🎉
