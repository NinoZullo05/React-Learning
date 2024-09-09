import React, { useState } from 'react';
import ChildComponent from './childComponent';

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