import { useState, useEffect } from "react";

const LocalStorageExample = () => {
  const [name, setName] = useState(() => {
    return localStorage.getItem("name") || "";
  });

  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Persisted Name: {name}</p>
    </div>
  );
};

export default LocalStorageExample;
