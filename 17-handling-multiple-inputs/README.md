# 🚀 17: Handling Multiple Inputs in a Form

## 📝 Objective
Learn how to handle multiple input fields in a form using a single state object in React.

## 📂 Example Code

### Creating the Form Component

```jsx
import React, { useState } from 'react';

const MultipleInputsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Age: ${formData.age}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Email:
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <label>
        Age:
        <input 
          type="number" 
          name="age" 
          value={formData.age} 
          onChange={handleChange} 
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MultipleInputsForm;
```

### Integrating the Component

In `App.js`, use the `MultipleInputsForm` component:

```jsx
import React from 'react';
import MultipleInputsForm from './components/MultipleInputsForm';

function App() {
  return (
    <div className="App">
      <MultipleInputsForm />
    </div>
  );
}

export default App;
```

## 🔍 How It Works
- **State Management**: All form input values are stored in a single state object (`formData`). Each input field has a corresponding key in this object.
- **Handling Change Events**: The `handleChange` function dynamically updates the appropriate key in the `formData` object using the input's `name` attribute.
- **Form Submission**: When the form is submitted, all the collected data is displayed via an alert.

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
Go to [http://localhost:3000](http://localhost:3000) to test the form with multiple input fields.

## Happy coding! 🎉
