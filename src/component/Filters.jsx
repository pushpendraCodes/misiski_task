import React, { useState } from "react";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import FilterModal from "./FilterModal";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Filters = () => {
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

  return (
    <div className=" ">
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
            <div className="sort-box z-30 px-3 py-3  ">
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
            <div className="value-box z-30 px-3 py-3  ">
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
            <div className="lead-box z-30 px-3 py-3  ">
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
    </div>
  );
};

export default Filters;
