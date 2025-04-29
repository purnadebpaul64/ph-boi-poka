import React from "react";
import heroImg from "../../assets/hero-book.png";

const Hero = () => {
  return (
    <div className="my-10 bg-[#f3f3f3] rounded-[24px]">
      <div className="py-10 px-18 flex justify-between items-center">
        <div className="w-8/12 space-y-10">
          <h1 className="text-7xl font-semibold leading-20">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn bg-[#23BE0A] text-white">View The List</button>
        </div>
        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
