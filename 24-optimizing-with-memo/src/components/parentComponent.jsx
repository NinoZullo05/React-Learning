import { useState } from "react";
import ChildComponent from "./childComponent";

const ParentComponent = () => {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("Hello, World!");

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
      <ChildComponent value={value} />
    </div>
  );
};

export default ParentComponent;
