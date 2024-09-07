# 🚀 02: Using Props for Customization

## 📝 Objective

Learn how to pass **props** to a React component to make it more dynamic. You will create a component that accepts a name as a prop and displays a personalized greeting.

## 📂 Example Code

### Creating the Component

Let’s modify our previous component to accept props:

```jsx
import React from "react";

// Component that accepts props
const PropsExample = (props) => {
  return (
    <>
      <h1>Hello, {props.name}!</h1>
    </>
  );
};

export default PropsExample;
```

### Integrating the Component

Now, use this component in your main application, passing the name prop:

```jsx
import "./App.css";
import PropsExample from "./components/PropsExample";
function App() {
  return (
    <div className="App">
      <PropsExample name="John"></PropsExample>
    </div>
  );
}

export default App;
```

## 🔍 How It Works

1. **Creating the Component**: `GreetingComponent` receives `props` and uses `{props.name}` to display a personalized greeting.
2. **Using the Component**: In `App.js`, we pass the `name` prop with the value "John" to `GreetingComponent`.

## 🚀 Running the Application

1. **Install Dependencies** (if not done yet):
   ```bash
   npm install
   ```
2. **Start the Development Server**:
   ```bash
   npm start
   ```
3. **View the Application** at `http://localhost:3000` to see the personalized greeting.

## Happy coding! 🎉
