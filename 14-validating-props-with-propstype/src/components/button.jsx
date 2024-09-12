import PropTypes from "prop-types";

const Button = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

// Defining PropTypes for the component
Button.propTypes = {
  label: PropTypes.string.isRequired, // `label` must be a string and is required
  onClick: PropTypes.func.isRequired, // `onClick` must be a function and is required
  style: PropTypes.object, // `style` should be an object, but it's not required
};

// Defining default props
Button.defaultProps = {
  style: { backgroundColor: "gray", color: "white" },
};

export default Button;