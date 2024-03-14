import React from "react";
import { portfolioData } from "../portfolioData";
import { Link, useParams } from "react-router-dom";
import { CgArrowTopRight } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const SinglePage = () => {
  const { id } = useParams();
  const selectedProject = portfolioData[id];

  return (
    <div className="flex justify-center w-full pt-[110px] min-h-screen bg-black/90">
      <div className="max-w-[1000px] mx-[30px] xl:max-w-[1200px] w-full">
        <h1 className="text-2xl md:text-4xl text-[#66FCF1] font-lspartan">
          <Link to='/portfolio'>Portfolio</Link> / <span className="text-[1.4rem] md:text-[2rem]">{selectedProject.name}</span>
        </h1>
        <span className="py-[2px] block rounded-lg bg-[#66FCF1] w-[5%]"></span>
        <div className="flex items-center justify-evenly gap-8 my-8">
          <img
            src={selectedProject.img}
            alt={selectedProject.name}
            width={650}
            className="rounded-xl hidden lg:block"
          />
          <div className="text-white font-montserrat flex flex-col gap-2">
          <img
            src={selectedProject.img}
            alt={selectedProject.name}
            width={650}
            className="lg:hidden rounded-xl"
          />
            <h1 className="text-2xl mb-2">{selectedProject.name}</h1>
            <p>
              <b>Technologies:</b> {selectedProject.technologies}
            </p>
            <p>
              <b>Info:</b> {selectedProject.info}
            </p>
            <p>
              <b>Date:</b> {selectedProject.date}
            </p>
            <a href={selectedProject.codes} target="_blank" className="flex items-center pt-2"><FaGithub className="text-[1.2rem] mr-[8px]" /> Open Source Code</a>
            <a
              href={selectedProject.url}
              target="_blank"
              className="font-montserrat flex items-center mt-2"
            >
              Visit website
              <CgArrowTopRight className="text-[#66FCF1] text-[1.6rem] ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
