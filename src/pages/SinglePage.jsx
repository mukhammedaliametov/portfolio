import React from "react";
import { portfolioData } from "../portfolioData";

const SinglePage = () => {
  return (
    <div className="flex justify-center w-full pt-[110px] min-h-screen bg-black/90">
      <div className="max-w-[1000px] mx-[30px] xl:max-w-[1200px] w-full">
        {portfolioData.map((item, index) => {
          return (
            <div key={index} className="">
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SinglePage;
