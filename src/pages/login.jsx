
import FormLogin from "../components/Fragments/FormLogin";
import FormLayouts from "../components/Layouts/FormLayouts";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";

const LoginPage = () => {
  return (
    <>
      <HeaderLayouts position="relative"/>
      <MainLayouts>
        <FormLayouts
          title="Masuk ke Akun"
          description="Yuk, lanjutin belajarmu di videobelajar"
        >
          <FormLogin />
        </FormLayouts>
      </MainLayouts>
    </>
  );
};

export default LoginPage;
