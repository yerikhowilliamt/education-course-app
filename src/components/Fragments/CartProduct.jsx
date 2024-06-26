import { useState } from "react";
import Button from "../Elements/Button/Button";

const CartProduct = () => {
  const handleAddToCart = (event) => {
    event.preventDefault();
    window.location.href = "/keranjang"
  }
  return (
    <div className="w-2/6 h-full flex flex-col p-6 gap-6 bg-white border rounded-[10px]">
      <div className="flex flex-col gap-4">
        <h6 className="text-h6 text-dark-primary font-heading font-semibold">
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
          Manager.
        </h6>
        <div className="flex justify-between h-[25px]">
          <div className="flex gap-2">
            <h6 className="text-h6 text-primary font-heading font-semibold">
              Rp 250K
            </h6>
            <span className="line-through text-dark-disabled">Rp 500K</span>
          </div>
          <div className="bg-main-secondary py-1 px-2.5 gap-1 border rounded-[10px] flex items-center">
            <p className="text-light-primary">Diskon 50%</p>
          </div>
        </div>
        <p className="text-body-small text-info font-body font-medium">
          Penawaran spesial tersisa 2 hari lagi!
        </p>
      </div>
      <Button onClick={handleAddToCart} classname="w-full rounded-[10px] py-2 bg-main-primary text-light-primary text-body-medium font-body font-bold">
        Beli Sekarang
      </Button>
      <div className="flex flex-col gap-3">
        <p className="text-body-medium text-dark-primary font-heading font-semibold">
          Kelas ini Sudah Termasuk
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-2 items-center">
            <img src="/icons/File_Check.png" alt="" />
            <p className="text-body-small text-dark-secondary font-body">
              Ujian Akhir
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icons/video.png" alt="" />
            <p className="text-body-small text-dark-secondary font-body">
              45 Video
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icons/book-2.png" alt="" />
            <p className="text-body-small text-dark-secondary font-body">
              7 Dokumen
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icons/file-certificate.png" alt="" />
            <p className="text-body-small text-dark-secondary font-body">
              Ujian Akhir
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <img src="/icons/File_Edit.png" alt="" />
            <p className="text-body-small text-dark-secondary font-body">
              Pretest
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-body-medium text-dark-primary font-heading font-semibold">
          Bahasa Pengantar
        </p>
        <div className="flex gap-2">
          <img src="/icons/world.png" alt="" />
          <p className="text-body-small text-dark-secondary font-body">
            Bahasa Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
