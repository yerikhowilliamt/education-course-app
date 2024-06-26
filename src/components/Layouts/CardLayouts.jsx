import Tabs from "../Fragments/Tabs";
import CardProduct from "../Fragments/CardProduct";

const CardLayouts = ({page}) => {
  return (
    <div className="w-full h-full flex flex-col gap-8" page={page}>
      {page === "detail" ? "" : <Header />}
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
      img: "/images/img-01.png",
      avatar: "/avatars/Avatar-01.png",
      price: "Rp 300K",
    },
    {
      id: 2,
      img: "/images/img-02.png",
      avatar: "/avatars/Avatar-02.png",
      price: "Rp 300K",
    },
    {
      id: 3,
      img: "/images/img-03.png",
      avatar: "/avatars/Avatar-03.png",
      price: "Rp 300K",
    },
    {
      id: 4,
      img: "/images/img-04.png",
      avatar: "/avatars/Avatar-04.png",
      price: "Rp 300K",
    },
    {
      id: 5,
      img: "/images/img-05.png",
      avatar: "/avatars/Avatar-05.png",
      price: "Rp 300K",
    },
    {
      id: 6,
      img: "/images/img-06.png",
      avatar: "/avatars/Avatar-06.png",
      price: "Rp 300K",
    },
    {
      id: 7,
      img: "/images/img-07.png",
      avatar: "/avatars/Avatar-07.png",
      price: "Rp 300K",
    },
    {
      id: 8,
      img: "/images/img-08.png",
      avatar: "/avatars/Avatar-08.png",
      price: "Rp 300K",
    },
    {
      id: 9,
      img: "/images/img-09.png",
      avatar: "/avatars/Avatar-09.png",
      price: "Rp 300K",
    },
  ];
  
  return (
    <div className="w-full flex flex-wrap justify-between gap-4 2xl:gap-8 overflow-hidden">
      {product.map((product) => (
        <CardProduct key={product.id} productImage={product.img} avatar={product.avatar} price={product.p}/>
      ))}
    </div>
  )
}

export default CardLayouts;
