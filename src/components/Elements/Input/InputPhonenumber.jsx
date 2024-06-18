import Label from "./Label"
import Input from "./Input"

function InputPhonenumber({ label, name, type, classname }) {
  return (
    <div className="md:w-full w-[280px]">
      <Label htmlFor={name}>{label}</Label>
      <div className="w-full flex md:gap-6 gap-3 ">
        <div className="md:w-36 w-[122px] md:h-full h-12 flex items-center border rounded-lg">
          <div className="md:w-11 w-11 h-full md:py-4 py-1 px-2.5 md:px-2.5 bg-base items-center flex justify-center ">
            <img src="/icons/Flag Icon.png" alt="Flag Icon" />
          </div>
          <div className="md:w-28 w-[78px] h-full flex justify-center items-center">
            <select name="intlPhoneCodes" id="intlPhonecodes">
              <option value="Indonesia">+62</option>
              <option value="Malaysia">+60</option>
              <option value="Singapore">+65</option>
              <option value="Philippines">+63</option>
              <option value="Timor Leste">+670</option>
            </select>
          </div>
        </div>
        <Input name={name} type={type} classname={classname} />
      </div>
    </div>
  );
}

export default InputPhonenumber;
