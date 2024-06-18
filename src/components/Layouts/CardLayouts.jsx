import Tabs from "../Fragments/Tabs";
import CardProduct from "../Fragments/CardProduct";

const CardLayouts = () => {
  return (
    <div className="w-full h-full flex flex-col gap-8">
      <Header />
      <Body />
    </div>
  );
};

const Header = () => {
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex flex-col gap-2.5 ">
        <h3 className="md:text-h3 text-h4 text-dark-primary font-heading font-semibold">
          Koleksi Video Pembelajaran Unggulan
        </h3>
        <p className="text-body-medium text-dark-secondary font-medium">
          Jelajahi Dunia pengetahuan Melalui Pilihan Kami
        </p>
      </div>
      <Tabs />
    </div>
  );
};

const Body = () => {
  const product = [
    {
      id: 1,
      img: "/public/images/img-01.png",
      avatar: "/public/avatars/Avatar-01.png",
    },
    {
      id: 2,
      img: "/public/images/img-02.png",
      avatar: "/public/avatars/Avatar-02.png",
    },
    {
      id: 3,
      img: "/public/images/img-03.png",
      avatar: "/public/avatars/Avatar-03.png",
    },
    {
      id: 4,
      img: "/public/images/img-04.png",
      avatar: "/public/avatars/Avatar-04.png",
    },
    {
      id: 5,
      img: "/public/images/img-05.png",
      avatar: "/public/avatars/Avatar-05.png",
    },
    {
      id: 6,
      img: "/public/images/img-06.png",
      avatar: "/public/avatars/Avatar-06.png",
    },
    {
      id: 7,
      img: "/public/images/img-07.png",
      avatar: "/public/avatars/Avatar-07.png",
    },
    {
      id: 8,
      img: "/public/images/img-08.png",
      avatar: "/public/avatars/Avatar-08.png",
    },
    {
      id: 9,
      img: "/public/images/img-09.png",
      avatar: "/public/avatars/Avatar-09.png",
    },
  ];
  
  return (
    <div className="w-full flex flex-wrap justify-between gap-4 2xl:gap-8">
      {product.map((product) => (
        <CardProduct key={product.id} productImage={product.img} avatar={product.avatar}></CardProduct>
      ))}
    </div>
  )
}

export default CardLayouts;