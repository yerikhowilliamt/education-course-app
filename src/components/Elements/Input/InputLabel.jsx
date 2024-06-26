import Label from "./Label"
import Input from "./Input"

const InputLabel = ({ label, name, type, src, border, classname, color, placeholder }) => {
  return (
    <div className="w-full flex flex-col">
      <Label color={color} htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        src={src}
        border={border}
        classname={classname}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputLabel;