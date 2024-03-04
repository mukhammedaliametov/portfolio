import React from "react";
import ResumeSkills from "../components/ResumeSkills";

const Resume = () => {
  return (
    <div className="flex justify-center w-full pt-[110px] bg-black/90" id="resume">
      <div className="lg:max-w-[1000px] mx-[30px] xl:max-w-[1200px]  flex flex-col w-full">
        <h1 className="text-4xl text-[#66FCF1] font-lspartan">Resume</h1>
        <span className="py-[2px] rounded-lg bg-[#66FCF1] w-[5%]"></span>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full mt-5">
          <div>
            <h1 className="text-[1.2rem] font-montserrat text-white">
              Education
            </h1>
            <div className="border-l-[1px] border-[#66FCF1] p-4 flex flex-col border-b-[1px] w-80">
              <p className="text-[1.1rem] text-white font-montserrat">
                Ministry of Public Education
              </p>
              <span className="text-1xl py-1 text-[#ffffffd2] font-lspartan px-1">
                2014 - 2023 may
              </span>
              <span className="text-[1.1rem] font-montserrat text-white ">
                Up to the 9th grade
              </span>
            </div>
            <div className="border-l-[1px] border-[#66FCF1] p-4 flex flex-col">
              <p className="text-[1.1rem] text-white font-montserrat">
                Kanlikul district vocational school
              </p>
              <span className="text-1xl py-1 text-[#ffffffd2] font-lspartan px-1">
                2023 september - (2025)
              </span>
              <span className="text-[1.1rem] font-montserrat text-white ">
                Servicing of auto and electrical equipment
              </span>
            </div>
          </div>
          <div className="mt-[30px] md:mt-0"> 
            <h1 className="text-[1.2rem] font-montserrat text-white">
              Work Experience
            </h1>
            <div className="border-l-[1px] border-[#66FCF1] p-4 flex flex-col border-b-[1px] w-80">
              <p className="text-[1.1rem] text-white font-montserrat">
                Bizler Group LLC
              </p>
              <span className="text-1xl py-1 text-[#ffffffd2] font-lspartan px-1">
                2022 - present
              </span>
              <span className="text-[1.1rem] font-montserrat text-white ">
                Junior developer
              </span>
            </div>
            <div className="border-l-[1px] border-[#66FCF1] p-4 flex flex-col border-b-[1px] w-80">
              <p className="text-[1.1rem] text-white font-montserrat">
                Kanlikul IT Academy
              </p>
              <span className="text-1xl py-1 text-[#ffffffd2] font-lspartan px-1">
                2023 November - 2023 May
              </span>
              <span className="text-[1.1rem] font-montserrat text-white ">
                Front-End Mentor
              </span>
            </div>
            <div className="border-l-[1px] border-[#66FCF1] p-4 flex flex-col">
              <p className="text-[1.1rem] text-white font-montserrat">
                Intellect Academy
              </p>
              <span className="text-1xl py-1 text-[#ffffffd2] font-lspartan px-1">
                2023 October - present
              </span>
              <span className="text-[1.1rem] font-montserrat text-white ">
                Front-End Mentor
              </span>
            </div>
          </div>
        </div>
        <ResumeSkills />
      </div>
    </div>
  );
};

export default Resume;
