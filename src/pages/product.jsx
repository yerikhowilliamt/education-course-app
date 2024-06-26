import CardLayouts from "../components/Layouts/CardLayouts";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";
import FooterLayouts from "../components/Layouts/FooterLayouts";
import BannerLayouts from "../components/Layouts/BannerLayouts";

const ProductsPage = ({ page }) => {
  return (
    <>
      <HeaderLayouts position="fixed" type="product" color="text-dark-secondary" page={page} />
      <MainLayouts gap="md:gap-16 gap-6">
        <BannerLayouts type="course" background="bg-course" />
        <CardLayouts />
        <BannerLayouts type="newsletter" background="bg-newsletter" />
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default ProductsPage;
