const CardProduct = ({ productImage, avatar }) => {
  return (
    <div className="2xl:w-[535px] md:w-[388px] w-full md:h-[426px] 2xl:h-full flex flex-col md:gap-4 gap-3 p-5 bg-white border rounded-[10px]">
      <div className="w-full h-[83px] flex md:flex-col gap-3 md:gap-4">
        <Header productImage={productImage}></Header>
        <Body avatar={avatar}></Body>
      </div>
      <Footer></Footer>
    </div>
  );
};

const Header = ({ productImage }) => {
  return (
    <a href="">
      <img
        className="w-full h-full rounded-[10px]"
        src={productImage}
        alt=""
      />
    </a>
  );
};

const Body = ({ avatar }) => {
  return (
    <div className="w-full h-[82px] flex flex-col md:gap-4 gap-2 items-center md:items-start">
      <a href="">
        <div className="gap-2 w-full">
          <h6 className="md:text-h6 text-body-medium font-semibold md:leading-[21.6px] leading-[19.2px]">
            Big 4 Auditor Financial Analyst
          </h6>
          <p className="md:block hidden">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan...
          </p>
        </div>
      </a>
      <a href="">
        <div className="w-full md:h-11 h-[37px] flex items-center md:gap-2.5 gap-2 justify-center">
          <img src={avatar} alt="" className="md:w-10 w-9 md:h-10 h-9" />
          <div className="w-full h-full flex flex-col justify-center">
            <span className="md:text-body-medium text-body-small font-medium md:leading-[22.4px] leading-[19.6px]">
              Jena Ortega
            </span>
            <p className="text-body-small overflow-hidden md:leading-[19.6px] leading-[16.8px]">
              Senior Accountant di{" "}
              <span className="text-body-small text-dark-secondary font-bold">
                Gojek
              </span>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

const Footer = () => {
  return (
    <a href="">
      <div className="w-full h-7 flex justify-between items-center md:mt-64 2xl:mt-[21rem]">
        <div className="flex gap-2 h-[20px]">
          <img src="/public/icons/Rating.png" alt="" />
          <span className="border-b-2 font-medium text-dark-secondary">
            3.5 (86)
          </span>
        </div>
        <h4 className="md:text-h4 text-h5 font-heading font-semibold text-primary">
          Rp 300K
        </h4>
      </div>
    </a>
  );
};

export default CardProduct;
