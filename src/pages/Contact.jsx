import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="flex justify-center w-full pt-[110px] min-h-screen bg-black/90">
      <div className="max-w-[1000px] mx-[30px] xl:max-w-[1200px] w-full">
        <h1 className="text-4xl text-[#66FCF1] font-lspartan">Contact</h1>
        <span className="py-[2px] block rounded-lg bg-[#66FCF1] w-[5%]"></span>
        <div className="flex justify-evenly md:items-center my-6 gap-6">
          <ContactForm />
          <div className="text-[#ffffff8a] hidden md:flex flex-col gap-5 w-full md:w-auto">
            <a
              href="https://github.com/mukhammedaliametov"
              target="_blank"
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaGithub /> Follow on GitHub
            </a>
            <a
              href="https://instagram.com/ametov.me"
              target="_blank"
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaInstagram />
              Follow on Instagram
            </a>
            <a
              href="https://t.me/ametov_blog"
              target="_blank"
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaTelegram />
              Follow on Telegram
            </a>
            <a
              href="https://m.facebook.com/people/Mukhammedali-Ametov/100088878734938/?locale=et_EE"
              target="_blank"
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaFacebook />
              Follow on Facebook
            </a>
            <span className="border-t-[1px] border-[#ffffff49]"></span>
            <a
              href="mailto: ametovmukhammedali07@gmail.com"
              className="flex items-center gap-2 text-[1.1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <IoMdMail />
              ametovmukhammedali07@gmail.com
            </a>
            <a
              href="tel: +998(94)833-06-81"
              className="flex items-center gap-2 text-[1rem] font-lspartan duration-200 hover:text-[#66FCF1]"
            >
              <FaPhone />
              +998(94)833-06-81
            </a>
            <a
              href="https://t.me/ametovme"
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
