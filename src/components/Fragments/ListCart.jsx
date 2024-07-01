import { useFetchData } from "../../hooks/useFetchData";
import Button from "../Elements/Button/Button";
import {
  setFormData,
  setIsUpdate,
  setItems,
} from "../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../services/api";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListCart = () => {
  const items = useFetchData();
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);

  const handleEdit = (id) => {
    const foundData = items.find((item) => item.id === id);
    dispatch(setFormData({ title: foundData.title, price: foundData.price }));
    dispatch(setIsUpdate({ id: id, status: true }));
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(`/product/${id}`);
      dispatch(setItems(items.filter((item) => item.id !== id)));
      alert("Berhasil menghapus produk");
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Gagal menghapus produk");
    }
  };

  const handleCheckboxChange = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleDeleteSelected = async () => {
    try {
      await Promise.all(
        selectedItems.map(async (id) => {
          await deleteProduct(`/product/${id}`);
        })
      );
      dispatch(
        setItems(items.filter((item) => !selectedItems.includes(item.id)))
      );
      setSelectedItems([]);
      alert("Berhasil menghapus produk yang dipilih");
    } catch (error) {
      console.error("Error deleting selected products:", error);
      alert("Gagal menghapus produk yang dipilih");
    }
  };

  return (
    <>
      {items.map((item) => (
        <div key={item?.id} className="flex gap-2 justify-center items-center bg-white p-2">
          <input
            type="checkbox"
            checked={selectedItems.includes(item?.id)}
            onChange={() => handleCheckboxChange(item?.id)}
            className="h-5 w-20 cursor-pointer "
          />
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center ">
            <h6 className="md:text-h6 text-body-small font-bold font-body">
              {item?.title}
            </h6>
          </div>
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center ">
            <h6 className="md:text-h6 text-body-small font-bold font-body">
              EKO KURNIAWAN KHANNEDY
            </h6>
          </div>
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center ">
            <h6 className="md:text-h6 text-body-small font-bold font-body">
              RP {item?.price}
            </h6>
          </div>
          <div className="flex md:flex-row flex-col w-full md:gap-5 gap-2 items-center justify-center">
            <Button
              onClick={() => handleEdit(item.id)}
              classname="flex hover:border border-none hover:rounded-md h-full w-full justify-center items-center md:text-h4 text-body-small font-heading font-bold hover:bg-green-800 hover:text-white text-green-800 transition-all translate-y1 duration-700 ease-in-out"
            >
              EDIT
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              classname="flex hover:border border-none hover:rounded-md h-full w-full justify-center items-center md:text-h4 text-body-small font-heading font-bold hover:bg-error hover:text-white text-error transition-all ease-in-out translate-y1 duration-700"
            >
              DELETE
            </Button>
          </div>
        </div>
      ))}
      {selectedItems.length > 0 &&
      <div className="flex justify-center items-center mt-5">
            <Button
              onClick={handleDeleteSelected}
              classname="flex hover:border border-none hover:rounded-md h-full px-5 py-2 justify-center items-center md:text-h4 text-body-small font-heading font-bold hover:bg-error hover:text-white text-error transition-all ease-in-out hover:translate-y1 duration-700"
            >
              Hapus yang Dipilih
            </Button>
          </div>
      }
    </>
  );
};

export default ListCart;
