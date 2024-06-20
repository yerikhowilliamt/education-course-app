import { Link } from "react-router-dom";
import List from "../Elements/List/List";
import Logo from "../Fragments/Logo";

const FooterLayouts = () => {
  return (
    <footer className="border w-screen flex flex-col justify-center items-center gap-5 py-7 px-5 md:py-[64px] md:px-[120px] bg-primary">
      <Header />
      <Body />
      <Footer />
    </footer>
  );
};

const Header = () => {
  return (
    <div className="w-full h-full flex md:flex-row flex-col justify-between gap-4">
      <Address />
      <Tabs />
    </div>
  );
};

const Body = () => {
  return <div className="w-full h-8 border-border border-b"></div>;
};

const Footer = () => {
  return (
    <div className="w-full flex md:flex-wrap flex-wrap-reverse gap-3 justify-between items-center">
      <p className="text-body-medium text-dark-secondary font-body font-medium">
        @2023 Gerobak Sayur All Rights Reserved.
      </p>
      <div className="flex gap-[15px]">
        <Link to="" className="w-9 h-9 border-2 rounded-full p-1.5">
          <img src="/icons/Linkedin Icon.png" alt="" />
        </Link>
        <Link to="" className="w-9 h-9 border-2 rounded-full p-1.5">
          <img src="/icons/Facebook Icon.png" alt="" />
        </Link>
        <Link to="" className="w-9 h-9 border-2 rounded-full p-1.5">
          <img src="/icons/Instagram Icon.png" alt="" />
        </Link>
        <Link to="" className="w-9 h-9 border-2 rounded-full p-1.5">
          <img src="/icons/Twitter icon.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

const Address = () => {
  return (
    <div className="md:w-[352px] w-[320px] flex flex-col gap-4">
      <Logo classname="w-52 h-14 flex gap-3 items-center" />
      <div className="flex md:flex-col flex-wrap gap-4">
        <span className="md:text-body-large text-body-small text-dark-primary font-bold font-body md:leading-[25.2px] leading-[19.6px]">
          Gali Potensi Anda Melalui Pembelajaran Video hariesok.id!
        </span>
        <p>Jl. Usman Effendi No. 50 Lowokwaru, Malang</p>
        <p>+62-877-7123-1234</p>
      </div>
    </div>
  );
};

const Tabs = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-12 gap-3 h-full">
      <Kategori />
      <Perusahaan />
      <Komunitas />
    </div>
  );
};

const Kategori = () => {
  return (
    <div className="h-full flex md:flex-col gap-[15px] justify-between md:items-start items-center">
      <span className="text-body-medium text-dark-primary font-body font-bold">
        Kategori
      </span>
      <ul className="md:flex hidden flex-col gap-[13px]">
        <List classname="text-body-medium text-dark-secondary font-body">
          Digital & Teknologi
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Pemasaran
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Manjemen Bisnis
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Pengembangan Diri
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Desain
        </List>
      </ul>
      <Link to="" className="md:hidden flex">
        <img src="/icons/Arrow Icon.png" alt="" />
      </Link>
    </div>
  );
};

const Perusahaan = () => {
  return (
    <div className="h-full flex md:flex-col gap-[15px] justify-between md:items-start items-center">
      <span className="text-body-medium text-dark-primary font-body font-bold">
        Perusahaan
      </span>
      <ul className="md:flex hidden flex-col gap-[13px]">
        <List classname="text-body-medium text-dark-secondary font-body">
          Tentang Kami
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          FAQ
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Kebijakan Privasi
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Ketentuan Layanan
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Bantuan
        </List>
      </ul>
      <Link to="" className="md:hidden flex">
        <img src="/icons/Arrow Icon.png" alt="" />
      </Link>
    </div>
  );
};

const Komunitas = () => {
  return (
    <div className="h-full flex md:flex-col gap-[15px] justify-between md:items-start items-center">
      <span className="text-body-medium text-dark-primary font-body font-bold">
        Komunitas
      </span>
      <ul className="md:flex hidden flex-col gap-[13px]">
        <List classname="text-body-medium text-dark-secondary font-body">
          Tips Sukses
        </List>
        <List classname="text-body-medium text-dark-secondary font-body">
          Blog
        </List>
      </ul>
      <Link to="" className="md:hidden flex">
        <img src="/icons/Arrow Icon.png" alt="" />
      </Link>
    </div>
  );
};

export default FooterLayouts;
