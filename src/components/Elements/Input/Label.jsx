const Label = ({ htmlFor, children }) => {
  return (
    <label htmlFor={htmlFor} className="block mb-2">
      <span className="after:content-['*'] after:ml-0.5 after:text-red-500 md:text-body-medium text-body-small font-body">
        {children}
      </span>
    </label>
  );
};

export default Label;
