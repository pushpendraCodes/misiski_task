import React, { useEffect, useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [isSortmore, setSortMore] = useState(false);
  const [isBrandmore, setBrandMore] = useState(false);

  const modalRef = useRef();

  // Close the modal when clicking outside
  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  // Add event listener when the modal opens
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div  className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef} className="bg-white p-6  shadow-xl w-96">
        <div className="mb-4 flex justify-between">
          <p></p>
          <p className="text-xl font-semibold mb-2 text-center">All Filters</p>

          <RxCross2
            onClick={onClose}
            className="w-5 cursor-pointer h-5"
          />
          {/* Add your filter and sort options here */}
        </div>
        <hr />
        <div className="max-h-80 overflow-y-scroll">
          <div className="my-1">
            <p className="my-4 font-semibold text-lg">Sort By</p>

            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="radio"
              />
              <label htmlFor="">Featured</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="radio"
              />
              <label htmlFor="">New</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="radio"
              />
              <label htmlFor="">Minimum</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="radio"
              />
              <label htmlFor="">A-Z</label>
            </div>
            {isSortmore && (
              <div className="flex gap-4 my-3">
                <input
                  name="sort"
                  className="w-10 bg-black text-black"
                  type="radio"
                />
                <label htmlFor="">Z-A</label>
              </div>
            )}

            {isSortmore ? (
              <button
                onClick={() => setSortMore(false)}
                className="flex gap-1 underline items-center p-0 my-3">
                <span>show less</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setSortMore(true)}
                className="flex gap-1 underline items-center p-0 my-3">
                <span>show more</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            )}
          </div>

          <hr />
          <div className="my-1">
            <p className="my-4 font-semibold text-lg">Brand Values</p>

            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="checkbox"
              />
              <label htmlFor="">Eco-friendly</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="checkbox"
              />
              <label htmlFor="">Gives back</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="checkbox"
              />
              <label htmlFor="">Handmade</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="checkbox"
              />
              <label htmlFor="">LGBTQ owned</label>
            </div>

            {isBrandmore && (
              <>
                <div className="flex gap-4 my-3">
                  <input
                    name="sort"
                    className="w-10 bg-black text-black"
                    type="checkbox"
                  />
                  <label htmlFor="">Not on Amazon</label>
                </div>
                <div className="flex gap-4 my-3">
                  <input
                    name="sort"
                    className="w-10 bg-black text-black"
                    type="checkbox"
                  />
                  <label htmlFor="">Organic</label>
                </div>
                <div className="flex gap-4 my-3">
                  <input
                    name="sort"
                    className="w-10 bg-black text-black"
                    type="checkbox"
                  />
                  <label htmlFor="">Women owned</label>
                </div>
              </>
            )}

            {isBrandmore ? (
              <button
                onClick={() => setBrandMore(false)}
                className="flex gap-1 underline items-center p-0 my-3">
                <span>show less</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                  />
                </svg>
              </button>
            ) : (
              <button
                onClick={() => setBrandMore(true)}
                className="flex gap-1 underline items-center p-0 my-3">
                <span>show more</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            )}
          </div>
          <hr />

          <div className="my-1">
            <p className="my-4 font-semibold text-lg">Lead Time</p>

            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="radio"
              />
              <label htmlFor="">3 days or less</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="radio"
              />
              <label htmlFor="">6 days or less</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="radio"
              />
              <label htmlFor="">9 days or less</label>
            </div>
            <div className="flex gap-4 my-3">
              <input
                name="sort"
                className="w-10 bg-black text-black"
                type="radio"
              />
              <label htmlFor="">14 days or less</label>
            </div>
          </div>

          <hr />
        </div>

        <div className="buttons flex justify-between items-center my-3">
        <p></p>
        <p className="text-lg font-bold">Clear All</p>
        <button className="px-12 text-white py-4 bg-gray-800 ">Apply</button>

        </div>
      </div>
    </div>
  );
};

export default FilterModal;
