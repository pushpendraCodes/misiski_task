import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";

const Banner = () => {
  return (
    <div
      style={{ backgroundColor: "rgb(89, 85, 64)" }}
      className="banner text-white py-6 m-auto text-center">
      <div className="w-full  md:w-[40%] mx-auto">
        <h1 className="text-3xl">Ready to start buying wholesale online?</h1>
        <div className="px-5">
          <p className="flex gap-2 my-3  mx-auto  ">
            <IoCheckmark className="  w-5 h-5" /> 60-day payment terms
          </p>
          <p className="flex gap-2 my-3 items-center  ">
            <IoCheckmark className="w-5 h-5" /> Free returns on all opening
            orders
          </p>
          <p className="flex gap-2 my-3 items-center  ">
            {" "}
            <IoCheckmark className="w-5 h-5" />
            Unique products curated for your store
          </p>
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-white flex items-center gap-2 text-black px-5 py-2">
            Sign Up For Shop <BsArrowRight className="  w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
