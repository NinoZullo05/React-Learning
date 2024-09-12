
# 🚀 Validating Props with PropTypes

## 📝 Objective

Learn how to use `PropTypes` in React to validate the props passed to components, ensuring they have the correct type and format.

## 📂 Example Code

### Installing PropTypes

Before using `PropTypes`, you need to install the package:

```bash
npm install prop-types
```

### Creating a Component with PropTypes

```jsx
import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

// Defining PropTypes for the component
Button.propTypes = {
  label: PropTypes.string.isRequired, // `label` must be a string and is required
  onClick: PropTypes.func.isRequired, // `onClick` must be a function and is required
  style: PropTypes.object, // `style` should be an object, but it's not required
};

// Defining default props
Button.defaultProps = {
  style: { backgroundColor: "gray", color: "white" },
};

export default Button;
```

### Using the Button Component

In `App.js`, use the `Button` component with validated props:

```jsx
import React from "react";
import Button from "./components/Button";

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className="App">
      <Button
        label="Submit"
        onClick={() => handleClick("Button Clicked!")}
        style={{ backgroundColor: "blue", padding: "10px 20px" }}
      />
      <Button label="Cancel" onClick={() => handleClick("Cancel Clicked!")} />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **PropTypes Validation**: The `Button` component uses `PropTypes` to ensure `label` is a string, `onClick` is a function, and `style` is an object.
- **Required Props**: The `label` and `onClick` props are marked as required. If they're not passed, React will throw a warning.
- **Default Props**: The `style` prop has a default value, so if it's not provided, a default style will be applied.

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

Go to [http://localhost:3000](http://localhost:3000) to see PropTypes in action. Open the browser console to see any validation warnings if the props are incorrect.

## Happy coding! 🎉
