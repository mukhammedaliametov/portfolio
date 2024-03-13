import React from "react";
import viewCV from "../../public/Mukhammedali_Ametov_CV.pdf";
import { FaFacebook, FaGithub, FaInstagram, FaTelegram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pt-[100px] min-h-screen flex justify-center w-full bg-black/90">
      <div className="lg:max-w-[1000px] mx-[30px] xl:max-w-[1100px] flex justify-between items-center gap-6 lg:mt-[50px] md:mt-[100px] mb-[100px]">
        <div className="w-[100%] md:w-[60%]">
          <div className="w-[40%] my-[20px] overflow-hidden md:hidden flex">
            <img
              src="https://cdn4.cdn-telegram.org/file/EnyrlA62LG7e24KSPgPY7-ztp2-Veoy9qSQQkP3yjhjBYflE8naaUMnn9yDnIpASkJF-tYVmb7fekYwpYjmiOlNNAlamtUu_v9VAMG_TyoQzuuwhow1LDUPwsK5W3P8FAVP-DBGp9DPmGhJsJZDthBE37tNYZiKp9u1xHDA2WwBC2ZeH9JAf5yS1Eb6dzYScaDbi8RGT6lFzTaFZWth-985wkAsolwOu88WkVmag4nI80l1kwowd-YfxBJpGWxTUHf_WQPRHzFEu_F3-B5PA1UFHO9cq27pd9abOS6yDFeBbMYQpS9Gdg6VLo7q1x4p5fWZ1xrxK5m2Gx1mClczC-w.jpg"
              alt="my-image"
              className="rounded-full border-[#49fff3] border-[2px]"
            />
          </div>
          <p className="md:text-4xl text-3xl font-montserrat font-bold text-[#66FCF1]">
            Front-End developer
          </p>
          <p className="w-[100%] pt-5 text-white font-lspartan text-[1.3rem]">
            I'm Muhammedali Ametov from Nukus is Uzbekistan. Currently I am
            working on several projects, continuing to innovate in the digital
            field.
          </p>
          <div className="flex gap-7 text-[1.3rem] text-[#ffffffd2] my-3 mb-7">
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
          <div>
            <a
              href={viewCV}
              target="_blank"
              className="text-white border-[2px] font-bold py-2 px-6 border-[#66FCF1]"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="w-[30%] overflow-hidden hidden md:block">
          <img
            src="https://cdn4.cdn-telegram.org/file/EnyrlA62LG7e24KSPgPY7-ztp2-Veoy9qSQQkP3yjhjBYflE8naaUMnn9yDnIpASkJF-tYVmb7fekYwpYjmiOlNNAlamtUu_v9VAMG_TyoQzuuwhow1LDUPwsK5W3P8FAVP-DBGp9DPmGhJsJZDthBE37tNYZiKp9u1xHDA2WwBC2ZeH9JAf5yS1Eb6dzYScaDbi8RGT6lFzTaFZWth-985wkAsolwOu88WkVmag4nI80l1kwowd-YfxBJpGWxTUHf_WQPRHzFEu_F3-B5PA1UFHO9cq27pd9abOS6yDFeBbMYQpS9Gdg6VLo7q1x4p5fWZ1xrxK5m2Gx1mClczC-w.jpg"
            alt="my-image"
            className="rounded-full border-[#49fff3] border-[2px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
