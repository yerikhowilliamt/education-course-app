const Button = ({ children, classname, type = "button", onClick, src }) => {
  return (
    <button
      className={classname}
      type={type}
      onClick={onClick}
    >
      <img src={src} alt="" />
      {children}
    </button>
  );
};

export default Button;
