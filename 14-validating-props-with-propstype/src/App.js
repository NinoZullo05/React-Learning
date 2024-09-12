import React from "react";
import Button from "./components/button";

function App() {
  const handleClick = (message) => {
    alert(message);
  };

  return (
    <div className="App">
      <Button
        label="Submit"
        onClick={() => handleClick("Button Clicked!")}
        style={{ backgroundColor: "blue", padding: "10px 20px" }}
      />
      <Button label="Cancel" onClick={() => handleClick("Cancel Clicked!")} />
    </div>
  );
}

export default App;
