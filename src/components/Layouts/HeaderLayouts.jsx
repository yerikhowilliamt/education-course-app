import Button from "../Elements/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../Fragments/Logo";

const HeaderLayouts = ({ position, type, page }) => {
  return (
    <nav
      className={`${position} w-screen md:h-20 h-[74px] bg-white flex justify-between items-center md:py-3 py-4 md:px-[120px] px-8 shadow-xl z-10`}
    >
      <Header />
      {type === "product" ? <Body page={page} /> : ""}
    </nav>
  );
};

const Header = () => {
  return (
    <Logo classname="md:w-[237px] w-[152px] h-[42px] md:h-14 flex justify-center items-center md:px-6" />
  );
};

const Body = ({ page }) => {
  return (
    <>
      <ul className="md:flex hidden items-center gap-6">
        {page === "landingpage" ? <ButtonRegister /> : <Profile />}
      </ul>
      {page === "landingpage" ? <ButtonBar /> : <ProfileBar />}
    </>
  );
};

const Profile = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Link to="/kategori">
        <li className="text-dark-secondary font-bold font-body font-body-medium">
          Kategori
        </li>
      </Link>
      <div
        onClick={handleClick}
        className="flex w-11 h-11 justify-center items-center"
      >
        {click ? (
          <img
            className="w-full h-full cursor-pointer"
            src="/avatars/user-avatar.png"
            alt=""
          />
        ) : (
          <img
            className="w-full h-full cursor-pointer"
            src="/avatars/user-avatar.png"
            alt=""
          />
        )}
      </div>
      <div
        className={
          click ? "hidden" : "absolute top-[4.5rem] right-[7.5rem] z-10"
        }
      >
        <ul className="flex flex-col items-center bg-white w-[200px] border">
          <li className="w-full h-[54px] items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border-b">
            <Link
              to="/profile"
            >
              Profile Saya
            </Link>
          </li>
          <li className="w-full h-[54px] items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border-b">
            <Link
              to="/"
            >
              Kelas Saya
            </Link>
          </li>
          <li className="w-full h-[54px] items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border-b">
            <Link
              to="/"
            >
              Pesanan Saya
            </Link>
          </li>
            <li className="w-full h-[54px] items-center py-4 px-3 text-main-tertiary font-medium font-body font-body-medium border-b">
              <Link className="flex gap-[5px] w-6 h-6 items-center">
              Keluar
              <img
                className="w-5 h-[18px]"
                src="/public/icons/Logout icon.png"
                alt=""
              />
              </Link>
            </li>
        </ul>
      </div>
    </>
  );
};

const ProfileBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className="flex md:hidden w-8 h-8 justify-center items-center"
      >
        {click ? (
          <img
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
          />
        ) : (
          <img
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
          />
        )}
      </div>
      <div className={click ? "hidden" : "absolute top-[4.6rem] left-0 z-10"}>
        <ul className="md:hidden flex flex-col items-center md:gap-6 bg-white w-screen border">
          <Link to="/kategori">
            <li className="w-screen h-[54px] md:hidden flex items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border">
              Kategory
            </li>
          </Link>
          <Link to="/profile">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border-b">
              Profile Saya
            </li>
          </Link>
          <Link to="/profile">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border-b">
              Kelas Saya
            </li>
          </Link>
          <Link to="/profile">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border-b">
              Pesanan Saya
            </li>
          </Link>
          <Link to="/profile">
            <li className="w-screen h-[54px] flex gap-[5px] items-center py-4 px-3 text-main-tertiary font-medium font-body font-body-medium border-b">
              Keluar
              <img src="/public/icons/Logout icon.png" alt="" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const ButtonRegister = () => {
  return (
    <>
      <Link to="/kategori">
        <li className="text-primary font-bold font-body font-body-medium">
          Kategori
        </li>
      </Link>
      <li className="flex gap-4">
        <Button
          onClick={() => {
            window.location.href = "/login";
          }}
          classname="w-32 h-11 text-center font-bold font-body-medium font-body bg-main-primary text-light-primary rounded-[10px]"
        >
          Login
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/register";
          }}
          classname="w-32 h-11 text-center font-bold font-body-medium font-body bg-white text-primary rounded-[10px] border border-primary"
        >
          Register
        </Button>
      </li>
    </>
  );
};

const ButtonBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className="flex md:hidden w-8 h-8 justify-center items-center"
      >
        {click ? (
          <img
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
          />
        ) : (
          <img
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
          />
        )}
      </div>
      <div className={click ? "hidden" : "absolute top-[4.6rem] left-0 z-10"}>
        <ul className="md:hidden flex flex-col items-center md:gap-6 bg-white w-screen border">
          <Link to="/beranda">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-primary font-medium font-body font-body-medium border">
              Beranda
            </li>
          </Link>
          <Link to="/kategori">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-dark-secondary font-medium font-body font-body-medium border-b">
              Kategori
            </li>
          </Link>
          <li className="w-screen h-[116px] flex flex-col justify-center gap-2 px-3 border-b p-1">
            <Button
              onClick={() => {
                window.location.href = "/login";
              }}
              classname="w-full h-11 text-center font-bold font-body-medium font-body bg-main-primary text-light-primary rounded-[10px]"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                window.location.href = "/register";
              }}
              classname="w-full h-11 text-center font-bold font-body-medium font-body bg-white text-primary rounded-[10px] border border-primary"
            >
              Register
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderLayouts;
