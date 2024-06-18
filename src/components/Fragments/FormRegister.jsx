import { Link } from "react-router-dom";
import Button from "../Elements/Button/Button";
import InputPhonenumber from "../Elements/Input/InputPhonenumber";
import InputLabel from "../Elements/Input/InputLabel";

const FormRegister = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    window.location.href = "/login"

  }

  return (
    <form
      action=""
      className="w-full flex flex-col gap-6 items-center justify-between"
    >
      <InputLabel
        label="Nama Lengkap"
        type="text"
        name="text"
        classname="w-full p-2"
      />
      <InputLabel
        label="E-Mail"
        type="email"
        name="email"
        classname="w-full p-2"
      />
      <InputPhonenumber
        label="No. Hp"
        name="tel"
        type="tel"
        classname="w-full p-2"
      />
      <InputLabel
        label="Kata Sandi"
        type="password"
        name="password"
        src="/icons/eye-off icon.png"
        border="w-6 h-6"
        classname="w-full p-2"
      />
      <InputLabel
        label="Konfirmasi Kata Sandi"
        type="password"
        name="confirmPassword"
        src="/icons/eye-off icon.png"
        border="w-6 h-6"
        classname="w-full p-2"
      />
      <Link
        to=""
        className="font-body md:text-body-medium text-body-small ml-auto"
      >
        Lupa Password?
      </Link>
      <div className="flex flex-col w-full gap-4">
        <Button onClick={handleLogin} classname="w-full bg-main-primary text-body-medium font-bold text-light-primary p-2 rounded-xl">
          Daftar
        </Button>
        <Button onClick={handleLogin} classname="w-full bg-main-primary-100 text-body-medium font-bold text-primary p-2 rounded-xl">
          Masuk
        </Button>
      </div>
      <span className="before:content[''] before:block before:h-0.5 before:bg-gray-300 after:content[''] after:block after:h-0.5 after:bg-gray-300 grid text-center grid-cols-3 items-center w-full">
        atau
      </span>
      <Button
        classname="w-full flex justify-center gap-2 text-body-medium font-bold text-[#4A505C] p-2 rounded-xl border"
        src="/icons/Google icon.png"
      >
        Daftar dengan Google
      </Button>
    </form>
  );
};

export default FormRegister;
