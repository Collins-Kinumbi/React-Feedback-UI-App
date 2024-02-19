function Button({ type, text, version, isDisabled }) {
  return (
    <button
      type={type}
      version={version}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

export default Button;
