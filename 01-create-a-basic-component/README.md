# 🚀 01: Create a Basic React Component

## 📝 Objective

Create a basic React component that displays a fixed message: "Hello, World!".

## 📂 Example Code

### Creating the Component

Let's start by creating a React component that will display our message.

```jsx
import React from 'react';

// Example component using function syntax
const FirstComponent = () => {
  return (
    <>
      <h1>Hello, World!</h1>
    </>
  );
};

export default FirstComponent;
```

### Integrating the Component

Next, you need to use this component in your main application. Open the `App.js` file and import your new component.

```jsx
import React from 'react';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent />
    </div>
  );
}

export default App;
```

## 🔍 How It Works

1. **Creating the Component**: We define a functional component `FirstComponent` that returns a JSX element with an `<h1>` tag displaying "Hello, World!".

2. **Using the Component**: We import `FirstComponent` into `App.js` and include it inside the `App` component's return statement.

## 🚀 Running the Application

To see your component in action, follow these steps:

1. **Open a Terminal**: Navigate to your project directory.

2. **Install Dependencies**: If you haven’t already, install the project dependencies by running:
   ```
   npm install
   ```

3. **Start the Development Server**: Run the following command to start your React application:
   ```
   npm start
   ```

4. **View the Application**: Open your web browser and go to `http://localhost:3000`. You should see "Hello, World!" displayed on the page.

Happy coding! 🎉
