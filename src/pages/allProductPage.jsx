import CardLayouts from "../components/Layouts/CardLayouts";
import FooterLayouts from "../components/Layouts/FooterLayouts";
import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";

const AllProductPage = ({ page }) => {
  return (
    <>
      <HeaderLayouts
        position="fixed"
        type="product"
        color="text-primary"
        page={page}
      />
      <MainLayouts>
        <CardLayouts />
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default AllProductPage;
