import React from "react";
import "../App.css";
import { IoIosLink } from "react-icons/io";
import TravelProject from '../assets/projects/Nukus Avto-Vokzal Tour Logo.png'
import Adebiyat from '../assets/projects/Adebiyat.png'

const Portfolio = () => {
  return (
    <div className="flex justify-center w-full pt-[110px] min-h-screen bg-black/90">
      <div className="max-w-[1000px] mx-[30px] xl:max-w-[1200px] w-full">
        <h1 className="text-4xl text-[#66FCF1] font-lspartan">Portfolio</h1>
        <span className="py-[2px] block rounded-lg bg-[#66FCF1] w-[5%]"></span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-6 text-white w-full mt-8">
          <a
            href='https://tur-travel.netlify.app'
            target="_blank"
            className="group relative flex px-4 py-8 rounded-md gap-5 flex-col bg-black/10 hover:bg-black/20 duration-300"
          >
            <div className="w-[30%] overflow-hidden rounded-md">
              <img src={TravelProject} alt='Nukus Avto-Vokzal Tour' className="w-full" />
            </div>
            <p className="font-semibold text-[1.1rem] mt-3">Nukus Avto-Vokzal Tour</p>
            <span className="text-[#ffffff9d]">This website is owned by Nukus Auto-Vokzal Tour. I got this project through bizler.group company and submitted it successfully.</span>
            <div className="flex items-center gap-2 group-hover:text-[#66FCF1]">
              <IoIosLink size={20} />
              <p className="font-semibold hover:text-[#66FCF1]">
              nukusavtovokzaltour.uz
              </p>
            </div>
          </a>
          <a
            href='https://adebiyat.uz'
            target="_blank"
            className="group relative flex px-4 py-8 rounded-md gap-5 flex-col bg-black/10 hover:bg-black/20 duration-300"
          >
            <div className="w-[20%] overflow-hidden rounded-md">
              <img src={Adebiyat} alt='Ádebiyat.uz' className="w-full h-[100%]" />
            </div>
            <p className="font-semibold text-[1.1rem] mt-3">Ádebiyat.uz</p>
            <span className="text-[#ffffff9d]">In this project, I have included detailed information about Karakalpak writers, their lives and works.</span>
            <div className="flex items-center gap-2 group-hover:text-[#66FCF1]">
              <IoIosLink size={20} />
              <p className="font-semibold hover:text-[#66FCF1]">
              adebiyat.uz
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
