
# 🚀 12: Handling Loading State

## 📝 Objective
Learn how to manage a loading state in React, typically used when waiting for data to load or an asynchronous operation to complete.

## 📂 Example Code

### Creating the Component

```jsx
import React, { useState, useEffect } from 'react';

const LoadingExample = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a data fetch with a timeout
    setTimeout(() => {
      setData('Data has been loaded!');
      setLoading(false);
    }, 3000); // Simulate a 3-second data fetch
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
};

export default LoadingExample;
```

### Integrating the Component

In `App.js`, use the `LoadingExample` component:

```jsx
import React from 'react';
import LoadingExample from './components/LoadingExample';

function App() {
  return (
    <div className="App">
      <LoadingExample />
    </div>
  );
}

export default App;
```

## 🔍 How It Works
- **Loading State**: The `loading` state is initially set to `true` and displays a loading message.
- **Simulated Data Fetch**: After 3 seconds, the `setTimeout` simulates a data fetch, and the `loading` state is set to `false`, displaying the fetched data.
- **Conditional Rendering**: The component conditionally renders either the loading message or the fetched data, depending on the `loading` state.

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
Go to [http://localhost:3000](http://localhost:3000) to see the loading state in action.

## Happy coding! 🎉
