import React from "react";
import Button from "../Elements/Button/Button";

const ListCart = ({ data, handleEdit, handleDelete }) => {
  return (
    <>
      {data.map((item) => (
        <div key={item.id} className="flex gap-2 justify-center bg-white p-2">
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center ">
            <h6 className="md:text-h6 text-body-small font-medium font-body">{item.title}</h6>
          </div>
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center ">
            <h6 className="md:text-h6 text-body-small font-medium font-body">
              EKO KURNIAWAN KHANNEDY
            </h6>
          </div>
          <div className="md:px-5 py-2 w-full flex items-center justify-center text-center ">
            <h6 className="md:text-h6 text-body-small font-medium font-body">{item.price}</h6>
          </div>
          <div className="flex md:flex-row flex-col w-full md:gap-5 gap-2 items-center justify-center">
            <Button
              onClick={() => handleEdit(item.id)}
              classname="flex hover:border hover:rounded-md h-full w-full justify-center items-center md:text-h4 text-body-small font-heading font-bold hover:bg-green-800 hover:text-white text-green-800 hover:transition-all hover:translate-y1 hover:duration-700"
            >
              EDIT
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              classname="flex hover:border hover:rounded-md h-full w-full justify-center items-center md:text-h4 text-body-small font-heading font-bold hover:bg-error hover:text-white text-error hover:transition-all hover:translate-y1 hover:duration-700"
            >
              DELETE
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListCart;
