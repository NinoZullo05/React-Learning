## React Conditional Rendering Example

This exercise demonstrates a simple React component that conditionally displays either "Welcome" or "Goodbye" based on the state.

### Example Code

#### Conditional Rendering Component

Create a file named `ConditionalRender.js` in the `src/components` directory with the following code:

```jsx
import React, { useState } from 'react';

const ConditionalRender = () => {
  // Initialize state to track if the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle the login state
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {/* Conditional rendering using a ternary operator */}
      <h1>{isLoggedIn ? 'Welcome' : 'Goodbye'}</h1>

      {/* Button to toggle login state */}
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default ConditionalRender;
```

#### Integrating the Component

In the `src/App.js` file, import the `ConditionalRender` component and render it within the desired JSX:

```jsx
import React from 'react';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <ConditionalRender />
    </div>
  );
}

export default App;
```

### How It Works

- State Initialization: We use the `useState` hook to create a boolean state `isLoggedIn`, which is initially set to `false`.
- Conditional Rendering: Using a ternary operator, we conditionally render either "Welcome" if `isLoggedIn` is `true` or "Goodbye" if it is `false`.
- Toggling State: The button toggles between "Login" and "Logout" depending on the `isLoggedIn` state. Clicking the button triggers the `toggleLogin` function, which inverts the current state.

### Running the Application

- Open a terminal and navigate to your project directory.
- Install the project dependencies by running:

  ```bash
  npm install
  ```

- Start the development server by running:

  ```bash
  npm start
  ```

- Open your web browser and go to http://localhost:3000. You should see either "Welcome" or "Goodbye" based on the state, with a button to toggle between them.