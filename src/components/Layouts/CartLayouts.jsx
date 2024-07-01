import ListCart from "../Fragments/ListCart";
import FormCart from "../Fragments/FormCart";
import { useSelector } from "react-redux";

const CartLayouts = () => {
  const items = useSelector((state) => state.cart.items);
  console.log(items)
  return (
    <div className="w-full bg-transparent flex flex-col items-center md:p-10 p-0 gap-20">
      <h1 className="md:text-h1 text-h2 text-neutral-800 font-heading font-bold">
        PESANAN SAYA
      </h1>
      <FormCart />
      <div className="w-full flex flex-col md:p-5 p-2 border rounded-2xl md:gap-5 gap-2 bg-white shadow-lg">
        <div className="flex gap-2 justify-center border rounded-lg bg-gray-500">
          <div className="md:px-5 py-2 w-full text-center">
            <h4 className="md:text-h4 text-body-small font-semibold font-heading text-white">
              KELAS
            </h4>
          </div>
          <div className="md:px-5 py-2 w-full text-center">
            <h4 className="md:text-h4 text-body-small font-semibold font-heading text-white">
              TUTOR
            </h4>
          </div>
          <div className="md:px-5 py-2 w-full text-center">
            <h4 className="md:text-h4 text-body-small font-semibold font-heading text-white">
              HARGA
            </h4>
          </div>
          <div className="md:px-5 py-2 w-full text-center">
            <h4 className="md:text-h4 text-body-small font-semibold font-heading text-white">
              AKSI
            </h4>
          </div>
        </div>
        <div className="w-full flex flex-col">
          <ListCart />
        </div>
      </div>
    </div>
  );
};
export default CartLayouts;
