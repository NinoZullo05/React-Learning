
import React, { useState } from 'react';

const ConditionalRender = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h1>{isLoggedIn ? 'Welcome' : 'Goodbye'}</h1>

      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default ConditionalRender;
