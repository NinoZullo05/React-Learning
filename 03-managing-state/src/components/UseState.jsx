import React, { useState } from "react";

const UseStateComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h1>Counter value : {counter}</h1>
      <button onClick={incrementCounter}>Add 1 to counter!</button>
    </div>
  );
};
export default UseStateComponent;
