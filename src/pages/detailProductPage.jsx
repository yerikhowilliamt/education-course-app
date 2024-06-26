import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";
import BannerLayouts from "../components/Layouts/BannerLayouts";
import FooterLayouts from "../components/Layouts/FooterLayouts";
import Breadcrumbs from "../components/Fragments/Breadcrumbs";
import DetailLayouts from "../components/Layouts/DetailLayouts";

const DetailProductPage = ({ page }) => {
  return (
    <>
      <HeaderLayouts
        position="fixed"
        type="product"
        color="text-dark-secondary"
        page={page}
      />
      <MainLayouts gap="gap-9">
        <Breadcrumbs />
        <BannerLayouts type="uiux" background="bg-course" />
        <DetailLayouts />
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default DetailProductPage;
