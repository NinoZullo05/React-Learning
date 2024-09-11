import React from 'react';
import Button from './components/button';

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className="App">
      <Button 
        label="Click Me" 
        onClick={() => handleClick('Button Clicked!')} 
        style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px' }} 
      />
      <Button 
        label="Another Button" 
        onClick={() => handleClick('Another Button Clicked!')} 
        style={{ backgroundColor: 'green', color: 'white', padding: '10px 20px' }} 
      />
    </div>
  );
}

export default App;
