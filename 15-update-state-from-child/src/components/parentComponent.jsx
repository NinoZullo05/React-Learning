import { useState } from "react";
import ChildComponent from "./childComponent";

const ParentComponent = () => {
  const [message, setMessage] = useState("Initial Message from Parent");

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
