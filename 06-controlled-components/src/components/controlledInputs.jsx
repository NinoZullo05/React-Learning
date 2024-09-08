import { useState } from "react";
const ControlledInput = () => {
  const [inputValue, setInputValue] = useState();

  const changeValue = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={changeValue} />
      <p>Current value: {inputValue}</p>
    </>
  );
};

export default ControlledInput;
