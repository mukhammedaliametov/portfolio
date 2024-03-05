import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { portfolioData } from "../portfolioData";

const Portfolio = () => {
  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <div className="flex justify-center w-full pt-[110px] min-h-screen bg-black/90">
      <div className="max-w-[1000px] mx-[30px] xl:max-w-[1200px] w-full">
        <h1 className="text-4xl text-[#66FCF1] font-lspartan">Portfolio</h1>
        <span className="py-[2px] block rounded-lg bg-[#66FCF1] w-[5%]"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 my-6 text-white w-full">
          {portfolioData.map((item, index) => {
            return (
              <div
                className="box-shadow-css rounded-lg overflow-hidden bg-black/20"
                key={index}
              >
                <div>
                  <img src={item.img} alt="" className="w-full" />
                </div>
                <div className="flex justify-between items-center py-3 px-4">
                  <h1 className="text-[1.1rem] font-montserrat">{item.name}</h1>
                  <Link
                    to={convertToSlug(`${item.name}`)}
                    className="font-lspartan text-[1.2rem] flex items-center gap-2 text-[#66FCF1]"
                  >
                    See more
                    <FaAngleRight />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
