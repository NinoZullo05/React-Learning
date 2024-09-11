# 🚀 13: Reusable Button Component

## 📝 Objective

Learn how to create a reusable button component in React that can be customized with different labels, styles, and actions.

## 📂 Example Code

### Creating the Button Component

```jsx
import React from "react";

const Button = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
```

### Using the Reusable Button Component

In `App.js`, you can use the `Button` component with different props to customize its behavior:

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
        label="Click Me"
        onClick={() => handleClick("Button Clicked!")}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
        }}
      />
      <Button
        label="Another Button"
        onClick={() => handleClick("Another Button Clicked!")}
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px 20px",
        }}
      />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

- **Reusable Component**: The `Button` component accepts `label`, `onClick`, and `style` as props, making it highly customizable.
- **Event Handling**: Each button uses the `onClick` prop to trigger a function when clicked.
- **Styling**: The `style` prop allows dynamic styling, so each button can have a different appearance.

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

Go to [http://localhost:3000](http://localhost:3000) to see the reusable button component in action.

## Happy coding! 🎉
