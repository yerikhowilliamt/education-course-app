import CardProduct from "../Fragments/CardProduct";
import CartProduct from "../Fragments/CartProduct";
import DescProduct from "../Fragments/DescProduct";

const DetailLayouts = () => {
  return (
    <>
      <div className="w-full flex gap-9">
        <DescProduct />
        <CartProduct/>
      </div>
      <DetailCardSection />
    </>
  );
};

const DetailCardSection = () => {
  const dataProduct = [
    {
      id: 1,
      img: "/images/img-07.png",
      avatar: "/avatars/Avatar-07.png",
    },
    {
      id: 8,
      img: "/images/img-08.png",
      avatar: "/avatars/Avatar-08.png",
    },
    {
      id: 9,
      img: "/images/img-09.png",
      avatar: "/avatars/Avatar-09.png",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex flex-col">
        <h3 className="text-h3 text-dark-primary font-heading font-semibold">
          Video Pembelajaran Terkait Lainnya
        </h3>
        <p className="text-body-medium text-dark-secondary font-body">
          Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
        </p>
      </div>
      <div className="flex gap-6 w-full">
        {dataProduct.map((product) => (
          <CardProduct
            key={product.id}
            productImage={product.img}
            avatar={product.avatar}
          ></CardProduct>
        ))}
      </div>
    </div>
  );
};

export default DetailLayouts;
