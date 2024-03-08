import React from "react";

const ResumeSkills = () => {
  const skillsData = [
    {
      name: "HTML 5",
      year: "2022-present",
      percent: 80,
    },
    {
      name: "CSS 3 & SCSS",
      year: "2022-present",
      percent: 80,
    },
    {
      name: "JavaScript ES6",
      year: "2022-present",
      percent: 70,
    },
    {
      name: "Bootstrap 5 & Tailwind ",
      year: "2022-present",
      percent: 70,
    },
    {
      name: "React Js & Next Js",
      year: "2023-present",
      percent: 70,
    },
    {
      name: "TypeScript",
      year: "2023-present",
      percent: 70,
    },
    {
      name: "Git: GitHub",
      year: "2022-present",
      percent: 80,
    },
    {
      name: "AI libraries",
      year: "2023-present",
      percent: 60,
    },
  ];

  return (
    <div className="my-3">
      <h1 className="text-2xl text-white font-montserrat">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {skillsData.map((item) => (
          <div>
            <div className="flex justify-between items-center" key={item}>
              <p className=" text-white font-montserrat">
                <b>{item.name}</b>{" "}
                <span className="text-[.9rem] ml-2">({item.year})</span>
              </p>
              <p className="text-white font-montserrat">{item.percent}%</p>
            </div>
            <div className="relative">
              <span className="py-[3px] my-1 bg-white block rounded-sm w-[100%]"></span>
              <span
                className={`py-[3px] absolute top-0 left-0 bg-[#66FCF1] w-[50%]`}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills;
