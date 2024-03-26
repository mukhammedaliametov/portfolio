import React from "react";

const ErrorPage = () => {
  return (
    <div className="pt-[100px] min-h-screen flex justify-center w-full bg-black/90">
      <div className="lg:max-w-[1000px] mx-[30px] xl:max-w-[1100px] flex justify-between items-center gap-6 lg:mt-[50px] md:mt-[100px] mb-[100px]">
        <div className="flex items-center text-white">
            <p className="border-r-[1px] pr-4 mr-4 text-3xl py-2">404</p>
            <p>This page could not be found.</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
