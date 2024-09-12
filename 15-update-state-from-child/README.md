# 🚀 15: Updating State from Child Components

## 📝 Objective
Learn how to update the parent component's state from a child component by passing functions as props.

## 📂 Example Code

### Creating the Parent Component

```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const [message, setMessage] = useState('Initial Message from Parent');

  const updateMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <h1>{message}</h1>
      <ChildComponent onUpdate={updateMessage} />
    </div>
  );
};

export default ParentComponent;
```

### Creating the Child Component

```jsx
import React from 'react';

const ChildComponent = ({ onUpdate }) => {
  const handleClick = () => {
    onUpdate('Message Updated by Child');
  };

  return (
    <div>
      <button onClick={handleClick}>Update Parent Message</button>
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
- **Passing Functions as Props**: The parent component passes the `updateMessage` function to the `ChildComponent` as a prop (`onUpdate`).
- **Child Triggers Update**: When the child component's button is clicked, it calls the `onUpdate` function, updating the parent's `message` state.
- **State Lifting**: This approach demonstrates the concept of "lifting state up" by allowing a child component to change its parent's state.

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
Go to [http://localhost:3000](http://localhost:3000) to see how the child component updates the parent component's state.

## Happy coding! 🎉
