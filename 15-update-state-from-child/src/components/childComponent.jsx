const ChildComponent = ({ onUpdate }) => {
  const handleClick = () => {
    onUpdate("Message Updated by Child");
  };

  return (
    <div>
      <button onClick={handleClick}>Update Parent Message</button>
    </div>
  );
};

export default ChildComponent;
