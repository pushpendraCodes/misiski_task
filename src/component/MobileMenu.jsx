import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "@headlessui/react";
import { IoChevronDown, IoMenu, IoSearchOutline } from "react-icons/io5";
import { HiArrowLongRight } from "react-icons/hi2";

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);

  const drawerRef = useRef(null);

  useEffect(() => {
    const handleBodyScroll = () => {
      document.body.classList.toggle("overflow-hidden", isOpen);
    };

    if (isOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling on the body
      document.addEventListener("scroll", handleBodyScroll);
    } else {
      document.body.style.overflow = "auto"; // Allow scrolling on the body
      document.removeEventListener("scroll", handleBodyScroll);
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure default scrolling behavior when component unmounts
      document.removeEventListener("scroll", handleBodyScroll);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <div
        style={{ backgroundColor: "rgb(251, 248, 246)" }}
        className="text-center  w-full px-2 py-3 my-2 ">
        <p className="paragraph">
          Shop wholesale online from over 1,00,000 brands.{" "}
        </p>
      </div>
      <div

        className="flex   justify-between my-3">
        <div className="1 flex gap-2 items-center">
          <IoMenu
            onClick={() => setOpen((prev) => !prev)}
            className="w-8 h-8"
          />
          <img
            className="m-auto"
            src="https://cdn.faire.com/static/logo.svg"
            alt=""
          />
        </div>

        {isOpen && (
          <div
             ref={drawerRef}
            onMouseDown={() => setOpen((prev) => !prev)}
            className="drawer ">
            <div className="top px-5 py-5 text-white bg-slate-600">
              <img
                className=""
                src="https://cdn.faire.com/static/logo.svg"
                alt=""
              />
              <p className="flex my-4 justify-between items-center">
                <span>Sign Up To Shop </span>
                <HiArrowLongRight />{" "}
              </p>
              <p className="flex my-4 justify-between items-center">
                <span>Signin In</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex my-4 justify-between items-center">
                <span>sell on Faier</span> <HiArrowLongRight />{" "}
              </p>
            </div>
            <div className="flex px-5 py-5 flex-col gap-4">
              <p className="font-bold">Trending Collection</p>
              <p>All Europion Brands</p>
              <p>Novelty gifts</p>
              <p>Active Wear</p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>All Trending Collection</span> <HiArrowLongRight />{" "}
              </p>
            </div>

            <div className="flex px-5 py-5 flex-col gap-4">
              <p className="font-bold">Categories For You</p>

              <p className="flex justify-between items-center  ">
                {" "}
                <span>New Arrival</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Home Decore</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Food Drink</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Women</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Beuty Wellness</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>All Trending Collection</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Jwelary</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Men</span> <HiArrowLongRight />{" "}
              </p>
            </div>

            <div className="flex px-5 py-5 flex-col gap-4">
              <p className="font-bold">Featured</p>

              <p className="flex justify-between items-center  ">
                {" "}
                <span>All Trending Collection</span> <HiArrowLongRight />{" "}
              </p>


              <p>All Europion Brands</p>
              <p>Novelty gifts</p>
              <p>All Brands</p>
              <p>Active Wear</p>
              <p>New Arivals</p>
              <p>Active Wear</p>
              <p>Trending on Faier</p>

            </div>
            <div className="flex px-5 py-5 flex-col gap-4">


              <p className="flex justify-between items-center  ">
                {" "}
                <span>English (US)</span> <IoChevronDown />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Sign up to shop</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Sign In</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Sell On faier</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>help center</span> <HiArrowLongRight />{" "}
              </p>
              <p className="flex justify-between items-center  ">
                {" "}
                <span>Blog</span> <HiArrowLongRight />{" "}
              </p>


            </div>

          </div>
        )}

        <div className="2 flex gap-2 items-center">
          <IoSearchOutline className="w-5 h-6" />
          <button className="bg-gray-900  px-3 py-1 text-white">
            Sign Up to shop
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
