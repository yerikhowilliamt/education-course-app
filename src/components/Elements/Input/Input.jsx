


const Input = ({ type, name, classname, src, placeholder, border }) => {

  return (
    <div className="w-full h-12 py-1 px-2.5 gap-2 flex items-center border rounded-lg">
      <input className={classname} type={type} name={name} id={name} placeholder={placeholder}/>
      <img className={border} src={src} alt="" />
    </div>
  );
};

export default Input;
