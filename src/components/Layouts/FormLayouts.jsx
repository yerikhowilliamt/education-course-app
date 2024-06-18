const FormLayouts = ({ children, title, description }) => {
  return (
    <div className="max-w-[590px] md:p-9 py-7 px-5 flex flex-col justify-center items-center gap-9 rounded-md bg-primary">
      <div className="h-14 flex flex-col px-3 md:px-20 items-center w-full">
        <h3 className="md:text-h3 text-h4 font-heading font-semibold text-dark-primary">
          {title}
        </h3>
        <p className="md:text-body-medium text-body-small font-body">
          {description}
        </p>
      </div>
      {children}
    </div>
  );
};

export default FormLayouts;
