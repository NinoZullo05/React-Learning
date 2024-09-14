import useInput from "../hooks/useInput";

const CustomForm = () => {
  const nameInput = useInput("");
  const emailInput = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameInput.value}, Email: ${emailInput.value}`);
    nameInput.reset();
    emailInput.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name: </label>
        <input type="text" {...nameInput} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" {...emailInput} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomForm;
