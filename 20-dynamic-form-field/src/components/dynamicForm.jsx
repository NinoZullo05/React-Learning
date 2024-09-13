import  { useState } from "react";

const DynamicForm = () => {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleChange = (i, event) => {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  };

  const handleAddField = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleRemoveField = (i) => {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form Data: ${JSON.stringify(fields.map((field) => field.value))}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(index, e)}
          />
          <button type="button" onClick={() => handleRemoveField(index)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField}>
        Add Field
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;