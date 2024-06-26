import HeaderLayouts from "../components/Layouts/HeaderLayouts";
import MainLayouts from "../components/Layouts/MainLayouts";
import FooterLayouts from "../components/Layouts/FooterLayouts";
import CartLayouts from "../components/Layouts/CartLayouts";

const CartPage = ({ page }) => {


  return (
    <>
      <HeaderLayouts
        position="fixed"
        type="product"
        color="text-dark-secondary"
        page={page}
      />
      <MainLayouts>
        <CartLayouts/>
      </MainLayouts>
      <FooterLayouts />
    </>
  );
};

export default CartPage;
