import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="flex justify-center w-full pt-[110px] min-h-screen bg-black/90">
      <div className="max-w-[1000px] mx-[30px] xl:max-w-[1200px] w-full">
        <h1 className="text-4xl text-[#66FCF1] font-lspartan">Contact</h1>
        <span className="py-[2px] block rounded-lg bg-[#66FCF1] w-[5%]"></span>
        <div className="flex justify-evenly md:items-center my-6 gap-6">
          <form className="hidden md:flex flex-col gap-3 w-full md:w-[50%] text-white">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-bold">Email:</label>
              <input type="email" placeholder="email@example.com" className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]" id="email" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="font-bold">Number:</label>
              <input type="number" placeholder="+996 700 123 456" className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]" id="phone" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="msg" className="font-bold">Message:</label>
              <textarea placeholder="Write..." id="msg" rows={4} className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]"></textarea>
            </div>
            <div>
              <button className="px-8 mt-3 font-montserrat py-2 border border-[#66FCF1] rounded-sm">Send</button>
            </div>
          </form>
          <div className="text-[#ffffff8a] flex flex-col gap-5 w-full md:w-auto">
          <form className="flex md:hidden flex-col gap-3 w-full text-white mb-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="font-bold">Email:</label>
              <input type="email" placeholder="email@example.com" className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]" id="email" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="phone" className="font-bold">Number:</label>
              <input type="number" placeholder="+996 700 123 456" className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]" id="phone" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="msg" className="font-bold">Message:</label>
              <textarea placeholder="Write..." id="msg" rows={4} className="outline-none text-[.9rem] font-montserrat border border-[#ffffff6b] py-2 px-3 rounded-md bg-transparent focus:border-[#66FCF1]"></textarea>
            </div>
            <div>
              <button className="px-8 mt-3 font-montserrat py-2 border border-[#66FCF1] rounded-sm">Send</button>
            </div>
          </form>
            <a
              href=""
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaGithub /> Follow on GitHub
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaInstagram />
              Follow on Instagram
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaTelegram />
              Follow on Telegram
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaFacebook />
              Follow on Facebook
            </a>
            <span className="border-t-[1px] border-[#ffffff49]"></span>
            <a
              href=""
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <IoMdMail />
              ametovmukhammedali07@gmail.com
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-[1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaPhone />
              +998(94)833-06-81
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaTelegram />
              ametovme
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
