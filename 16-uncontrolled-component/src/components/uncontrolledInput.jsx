import { useRef } from "react";

const UncontrolledInput = () => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Input Value: ${inputRef.current.value}`);
    console.log(inputRef);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter Text:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledInput;