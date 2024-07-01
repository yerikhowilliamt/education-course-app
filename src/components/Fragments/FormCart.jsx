import Button from "../Elements/Button/Button";
import { addNewProduct, updateProduct } from "../../services/api";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  setFormData,
  setIsUpdate,
  updateItem,
} from "../../redux/slices/cartSlice";
import { uid } from "uid/single";
import { Link } from "react-router-dom";

const FormCart = () => {
  const formData = useSelector((state) => state.cart.formData);
  const isUpdate = useSelector((state) => state.cart.isUpdate);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(setFormData({ ...formData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.title === "" || formData.price === "") {
      return false;
    }

    if (isUpdate.status) {
      try {
        const result = await updateProduct(`/product/${isUpdate.id}`, formData);
        dispatch(updateItem({ id: isUpdate.id, newData: formData }));
        console.log(result);
        alert("Berhasil mengubah produk");
      } catch (error) {
        console.error("Error updating product:", error);
        alert("Gagal mengubah produk");
      }
    } else {
      const newData = { id: uid(),...formData};
      dispatch(addItem(newData));
      try {
        const result = await addNewProduct("/product", newData);
        console.log(result);
        window.location.reload();
        alert("Berhasil menambahkan produk");
      } catch (error) {
        console.error("Error adding product:", error);
        alert("Gagal menambahkan produk");
      }
    }

    dispatch(setIsUpdate({ id: null, status: false }));
    dispatch(setFormData({ title: "", price: "" }));
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-1/2 w-full bg-white md:p-10 p-5 border rounded-xl flex flex-col gap-10 items-center shadow-lg"
    >
      <h4 className="text-h4 text-neutral-700 font-bold font-heading">
        TAMBAH KELAS
      </h4>
      <div className="w-full border-2 border-black rounded-lg flex flex-col items-center p-2">
        <label
          htmlFor="title"
          className="text-h5 text-dark font-semibold font-heading"
        >
          NAMA KELAS
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={handleChange}
          value={formData.title}
          placeholder="Nama Kelas"
          className="w-full border-none outline-none bg-transparent text-h4 text-dark text-center placeholder:text-neutral-700 placeholder:text-opacity-50"
        />
      </div>
      <div className="w-full border-2 border-black rounded-lg flex flex-col items-center p-2">
        <label
          htmlFor="price"
          className="text-h5 text-dark font-semibold font-heading"
        >
          HARGA KELAS
        </label>
        <input
          type="text"
          pattern="[0-9]*[.]?[0-9]*"
          inputMode="decimal"
          name="price"
          id="price"
          onChange={handleChange}
          value={formData.price}
          placeholder="Harga Kelas"
          className="w-full border-none outline-none bg-transparent text-h4 text-dark text-center overflow-hidden placeholder:text-neutral-700 placeholder:text-opacity-50"
        />
      </div>
      <Button
        type="submit"
        classname="px-5 py-2 border rounded-md bg-green-700 shadow-lg text-white font-heading font-bold"
      >
        Tambah
      </Button>
    </form>
  );
};

export default FormCart;
