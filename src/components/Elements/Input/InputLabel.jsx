import Label from "./Label"
import Input from "./Input"

const InputLabel = ({ label, name, type, src, border, classname }) => {
  return (
    <div className="w-full flex flex-col">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        src={src}
        border={border}
        classname={classname}
      />
    </div>
  );
};

export default InputLabel;