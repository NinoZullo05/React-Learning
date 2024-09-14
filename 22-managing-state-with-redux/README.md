# 🚀 22: Managing State with Redux

## 📝 Objective

Learn how to manage application-wide state using Redux in a React app.

## 📂 Example Code

### Setting Up Redux

First, install the necessary Redux libraries:

```bash
npm install redux react-redux
```

### Creating the Redux Store

#### Define the Initial State and Reducer

```jsx
// store/reducer.js
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
```

#### Create the Redux Store

```jsx
// store/index.js
import { createStore } from "redux";
import counterReducer from "./reducer";

const store = createStore(counterReducer);

export default store;
```

### Integrating Redux with React

#### Set Up the Redux Provider

```jsx
// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
```

### Creating the Counter Component

#### Dispatch Actions and Access State

```jsx
// components/Counter.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

## 🔍 How It Works

- **Redux Store**: The `createStore` function is used to create a Redux store that holds the application's state.
- **Reducer**: The `counterReducer` function updates the `counter` state based on the action type (`INCREMENT` or `DECREMENT`).
- **Provider**: The `Provider` component from `react-redux` wraps the entire app, making the Redux store available to all components.
- **useSelector and useDispatch**: The `useSelector` hook is used to access the state, and `useDispatch` is used to dispatch actions to modify the state.

## 🚀 Running the Application

### Install Dependencies (if not done yet):

```bash
npm install redux react-redux
```

### Start the Development Server:

```bash
npm start
```

### View the Application:

Go to [http://localhost:3000](http://localhost:3000) to interact with the Redux-powered counter.

## Happy coding! 🎉
