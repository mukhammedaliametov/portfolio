import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link, Outlet } from "react-router-dom";
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const [click, setClick] = useState();
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <>
      <div className="fixed flex justify-center text-white shadow-md w-full bg-black z-10">
        <div className="xl:max-w-[1200px] lg:max-w-[1000px] px-[20px] bg-black lg:px-0 flex w-full duration-300 justify-between items-center">
          <Link to="/">
            <img
              src={Logo}
              alt="my-logo"
              className="rounded-full"
              width={100}
            />
          </Link>
          <div className="flex gap-[3rem]">
            {navItems.map((item, index) => {
              return (
                <div key={index} className="hidden md:flex">
                  <Link
                    to={item.link}
                    className="font-lspartan text-lg hover:text-[#66FCF1] duration-300"
                  >
                    {item.name}
                  </Link>
                  <span className="py-[5px] text-[#66FCF1] w-[100%]"></span>
                </div>
              );
            })}
          </div>
          <div className="hidden md:block">
            <a
              href="https://github.com/mukhammedaliametov?tab=repositories"
              className="py-2 px-5 bg-[#66FCF1] text-black/90 rounded-sm font-lspartan"
            >
              See My Works 
            </a>
          </div>
          <div className="block md:hidden">
            <span className="text-2xl" onClick={handleClick}>
              {click ? <IoClose /> : <FiMenu />}
            </span>
          </div>
          <div
            className={
              click
                ? "md:hidden absolute gap-[1.2rem] top-20 z-[-2] left-0 w-full flex py-[20px] px-[30px] flex-col bg-[#000000dc] duration-300"
                : "md:hidden absolute gap-[1.2rem] top-[-250px] z-[-2] left-0 w-full flex py-[20px] px-[30px] flex-col bg-[#000000dc] duration-300"
            }
          >
            {navItems.map((item, index) => {
              return (
                <div key={index} className="">
                  <Link
                    to={item.link}
                    className="font-lspartan text-lg hover:text-[#66FCF1] duration-300"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                  <span className="py-[5px] text-[#66FCF1] w-[100%]"></span>
                </div>
              );
            })}
            <div className="">
              <a
                href="https://github.com/mukhammedaliametov?tab=repositories"
                className="py-2 px-5 bg-[#66FCF1] text-black/90 rounded-sm font-lspartan"
              >
                See My Works
              </a>
            </div>
            <div className="border-b-[1px]"></div>
            <div className="flex gap-[4rem] text-[1.3rem] justify-center text-[#66FCF1]">
              <a href="https://github.com/mukhammedaliametov" target="_blank" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://t.me/ametov_blog" target="_blank" className="hover:text-white">
                <FaTelegram />
              </a>
              <a href="https://instagram.com/ametov.me" target="_blank" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://m.facebook.com/people/Mukhammedali-Ametov/100088878734938/?locale=et_EE" target="_blank" className="hover:text-white">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
