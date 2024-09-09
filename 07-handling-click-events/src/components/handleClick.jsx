import { useState } from "react";

const HandleClick = () => {
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClickCount(clickCount + 1);
    console.log("Button clicked " + clickCount + "times");
  };

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <p>Button clicked: {clickCount} times</p>
    </>
  );
};

export default HandleClick;
