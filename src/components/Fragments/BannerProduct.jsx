const BannerProduct = ({ children, background }) => {
  return (
      <div
        className={`z-0 w-full h-[400px] flex flex-wrap justify-center items-center rounded-xl ${background} bg-cover bg-center after:relative  after:content-[''] after:bg-black after:bg-opacity-80 after:w-full after:h-[400px] after:top-0 after:left-0 after:rounded-xl`}
      >
        {/* <img
        className="absolute w-full h-[400px] rounded-xl object-cover"
        src={src}
        alt=""
      />
      <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
      {children}
      </div>
  );
};

export default BannerProduct;
