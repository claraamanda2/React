import "./Button.css";

function Button({ text, onClick, disabled, type = "button" }) {
  return (
    <button
      className="custom-button"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;