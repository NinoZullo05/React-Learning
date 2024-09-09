# 🚀 09: Passing Functions as Props

## 📝 Objective
Learn how to pass functions as props from a parent component to a child component, allowing child components to trigger actions in the parent.

## 📂 Example Code

### Creating the Parent Component

```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('Hello from Parent!');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent changeMessage={updateMessage} />
    </div>
  );
};

export default ParentComponent;
```

### Creating the Child Component

```jsx
import React from 'react';

const ChildComponent = ({ changeMessage }) => {
  const handleClick = () => {
    changeMessage('Hello from Child!');
  };

  return (
    <div>
      <button onClick={handleClick}>Change Parent Message</button>
    </div>
  );
};

export default ChildComponent;
```

### Integrating the Components

In `App.js`, use the `ParentComponent`:

```jsx
import React from 'react';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}

export default App;
```

## 🔍 How It Works
- **Passing Functions as Props**: The `updateMessage` function from the parent is passed as a prop to the `ChildComponent`.
- **Function Invocation**: When the button in the child is clicked, it invokes `changeMessage`, updating the parent's state.
- **Communication**: This demonstrates how child components can communicate with and modify the parent component's state.

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
Go to [http://localhost:3000](http://localhost:3000) to see the function passed as a prop in action.

## Happy coding! 🎉
