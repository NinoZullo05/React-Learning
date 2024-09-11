# 🚀 11: Side Effects with useEffect

## 📝 Objective
Learn how to use the `useEffect` hook in React to handle side effects, such as fetching data, updating the DOM, or setting timers.

## 📂 Example Code

### Creating the Component with useEffect

```jsx
import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setData('Fetched data from API!');
      setLoading(false);
    }, 2000);
  }, []); // Empty dependency array to run only once when the component mounts

  return (
    <div>
      {loading ? <p>Loading...</p> : <p>{data}</p>}
    </div>
  );
};

export default DataFetcher;
```

### Integrating the Component

In `App.js`, use the `DataFetcher` component:

```jsx
import React from 'react';
import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <div className="App">
      <DataFetcher />
    </div>
  );
}

export default App;
```

## 🔍 How It Works
- **useEffect Hook**: The `useEffect` hook is used to perform side effects. In this case, it simulates fetching data after the component mounts.
- **Dependency Array**: An empty dependency array `[]` ensures the effect runs only once (when the component mounts).
- **State Management**: The `loading` state is used to show a loading message until the data is fetched.

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
Go to [http://localhost:3000](http://localhost:3000) to see the `useEffect` hook in action.

## Happy coding! 🎉
