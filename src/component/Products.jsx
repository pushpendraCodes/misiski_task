import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import FilterModal from "./FilterModal";
import Product from "./Product";
import { products } from "../util/menu";

const Products = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [values, setvalues] = useState(false);
  const [lead, setlead] = useState(false);
  console.log(sortOpen, "sort");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const product = {
    name: "Sample Product",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 29.99,
    images: [
      "https://via.placeholder.com/500x300/FF0000/FFFFFF",
      "https://via.placeholder.com/500x300/00FF00/FFFFFF",
      "https://via.placeholder.com/500x300/0000FF/FFFFFF",
    ],
  };

  return (
    <div>
      <div className="my-10">
        <h1
          style={{ fontFamily: "nantes, georgia, serif" }}
          className="text-center  text-xl">
          All European brands
        </h1>
        <p className="text-center w-80 mx-auto my-3">
          Shop independent brands from around the world at wholesale prices.
        </p>
      </div>
      <div className="filters    w-[90%] m-auto ">
        <div className="">
          <div className="flex  gap-3 relative">
            <button
              onClick={() => setSortOpen((prev) => !prev)}
              className="flex  bg-gray-100 px-2 py-4 hover:bg-slate-300 rounded-full">
              <HiArrowDown />

              <HiArrowUp />
            </button>
            {/* sort diolog */}
            {sortOpen && (
              <div className="sort-box  px-3 py-3  ">
                <p className=" py-2 font-semibold">Sort By</p>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">Featured</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">New</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">Minimum</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">A-Z</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">Z-A</label>
                </div>

                <hr />
                <button className="bg-gray-900 my-3 w-full px-3 py-2 text-white">
                  Apply
                </button>
              </div>
            )}

            <button
              onClick={openModal}
              className=" bg-gray-100 px-3 py-2 hover:bg-slate-300 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </button>

            <FilterModal
              isOpen={isModalOpen}
              onClose={closeModal}
            />

            <p
              onClick={() => setvalues((prev) => !prev)}
              className="flex gap-2 items-center bg-gray-100 px-5 py-1 hover:bg-slate-300 rounded-full">
              Values
              {values ? <BsChevronUp /> : <BsChevronDown />}
            </p>
            {values && (
              <div className="value-box px-3 py-3  ">
                <div className="flex justify-between items-center">
                  <p className=" py-2 font-semibold">Brand Values</p>
                  <p className="underline cursor-pointer">Clear All</p>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="checkbox" />
                  <label htmlFor="">Featured</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="checkbox" />
                  <label htmlFor="">New</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="checkbox" />
                  <label htmlFor="">Minimum</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="checkbox" />
                  <label htmlFor="">A-Z</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="checkbox" />
                  <label htmlFor="">Z-A</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="checkbox" />
                  <label htmlFor="">Z-A</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="checkbox" />
                  <label htmlFor="">Z-A</label>
                </div>

                <hr />
                <div className=" flex justify-end">
                  <button className="bg-gray-900 my-3 w-1/3 px-3   py-2 text-white">
                    Apply
                  </button>
                </div>
              </div>
            )}

            <p
              onClick={() => setlead((a) => !a)}
              className="flex cursor-pointer items-center gap-2 tex-sm bg-gray-100 px-5  hover:bg-slate-300 rounded-3xl">
              LeadTime
              {lead ? <BsChevronUp /> : <BsChevronDown />}
            </p>
            {lead && (
              <div className="lead-box px-3 py-3  ">
                <div className="flex justify-between items-center">
                  <p className=" py-2 font-semibold">Brand Values</p>
                  <p className="underline cursor-pointer">Clear All</p>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">Featured</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">New</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">Minimum</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">A-Z</label>
                </div>
                <div className="flex gap-4 my-4">
                  <input type="radio" />
                  <label htmlFor="">Z-A</label>
                </div>

                <hr />
                <div className=" flex justify-end">
                  <button className="bg-gray-900 my-3 w-1/3 px-3   py-2 text-white">
                    Apply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid  grid-cols-5 my-4 gap-2">
          {products &&
            products.map((item, i) => {
              return (
                <Product
                  key={i}
                  product={item}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
