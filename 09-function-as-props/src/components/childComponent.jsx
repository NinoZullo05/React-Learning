
const ChildComponent = ({ changeMessage }) => {
  const handleClick = () => {
    changeMessage('Hello from Child!');
  };

  return (
    <div>
      <button onClick={handleClick}>Change Parent Message</button>
    </div>
  );
};

export default ChildComponent;
