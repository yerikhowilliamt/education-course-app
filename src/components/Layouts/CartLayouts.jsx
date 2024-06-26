import { useState } from "react";
import { uid } from "uid";
import Button from "../Elements/Button/Button";
import ListCart from "../Fragments/ListCart";
import { FaTimes } from "react-icons/fa";

const CartLayouts = () => {
  const [items, setItems] = useState([
    {
      id: uid(),
      title: "Java",
      price: "500K",
    },
    {
      id: uid(),
      title: "Golang",
      price: "500K",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    price: "",
  });

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const handleChange = (event) => {
    let data = { ...formData };
    data[event.target.name] = event.target.value;
    setFormData(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = [...items];

    if (formData.title === "") {
      return false;
    }

    if (formData.price === "") {
      return false;
    }

    if (isUpdate.status) {
      data.forEach((item) => {
        if (item.id === isUpdate.id) {
          item.title = formData.title;
          item.price = formData.price;
        }
      });
    } else {
      data.push({ id: uid(), title: formData.title, price: formData.price });
    }
    setIsUpdate({ id: null, status: false });
    setItems(data);
    setFormData({ title: "", price: "" });
  };

  const handleEdit = (id) => {
    let data = [...items];
    let foundData = data.find((item) => item.id === id);
    setFormData({ title: foundData.title, price: foundData.price });
    setIsUpdate({ id: id, status: true });
  };

  const handleDelete = (id) => {
    let data = [...items];
    let filteredData = data.filter((item) => item.id !== id);
    setItems(filteredData);
  };

  return (
    <div className="w-full bg-transparent flex flex-col items-center md:p-10 p-0 gap-20">
        <h1 className="md:text-h1 text-h2 text-neutral-800 font-heading font-bold">
          PESANAN SAYA
        </h1>
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 bg-white md:p-10 p-5 border rounded-xl flex flex-col gap-10 items-center shadow-lg"
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
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
            placeholder="Harga Kelas"
            className="w-full border-none outline-none bg-transparent text-h4 text-dark text-center placeholder:text-neutral-700 placeholder:text-opacity-50"
          />
        </div>
        <Button
          type="submit"
          classname="px-5 py-2 border rounded-md bg-green-700 shadow-lg text-white"
        >
          Tambah
        </Button>
      </form>
      <div className="w-full flex flex-col md:p-10 p-2 border rounded-2xl md:gap-5 gap-2 bg-white shadow-lg">
        <div className="flex gap-2 justify-center border rounded-xl bg-gray-500">
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
        <div className="w-full flex flex-col gap-1">
          <ListCart
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            data={items}
          ></ListCart>
        </div>
      </div>
    </div>
  );
};
export default CartLayouts;
