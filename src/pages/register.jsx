import FormRegister from "../components/Fragments/FormRegister";
import FormLayouts from "../components/Layouts/FormLayouts";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";

const RegisterPage = () => {
  return (
    <>
      <HeaderLayouts position="relative"/>
      <MainLayouts items="items-center">
        <FormLayouts
          title="Pendaftaran Akun"
          description="Yuk, daftarkan akunmu sekarang juga!"
        >
          <FormRegister />
        </FormLayouts>
      </MainLayouts>
    </>
  );
};

export default RegisterPage;
