import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";
import { LiaLongArrowAltUpSolid } from "react-icons/lia";
import FilterModal from "./FilterModal";
import Product from "./Product";
import { products } from "../util/menu";
import Pagination from "./Pagination";
import Filters from "./Filters";

const Products = () => {
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
    <div className="filters    w-[90%] m-auto">
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

        <Filters />


      <div className="grid  grid-cols-5 my-4 gap-2">
        {products &&
          products.map((item, i) => {
            return (
              <>
                <Product
                  key={i}
                  product={item}
                />

                {i === 12 && (
                  <div className="text-center shadow-lg rounded-lg  col-span-2 justify-center gap-5 flex flex-col items-center">
                    <h2 className="text-lg">Get 50% off your first order</h2>
                    <p>Shop from more than 100,000 independent brands.</p>
                    <button className="bg-gray-900 w-[50%] px-3 py-3 text-white">
                      {" "}
                      Sign Up to shop
                    </button>
                    <p className="text-xs">
                      {" "}
                      Maximum discount $100. Offer ends 7 days after signup.
                    </p>
                  </div>
                )}

                {i === 20 && (
                  <div className=" px-4 py-4 shadow-lg rounded-lg  col-span-2 ">
                    <h2 className="text-lg">Shop by brand values</h2>
                    <div className=" flex my-3 ">
                      <div className="1 w-1/2">
                        <button className="px-2 my-2  py-1 flex items-center gap-2 border rounded-xl border-gray-500 hover:bg-black hover:text-white">
                          <img
                            className="w-4 h-4 "
                            src="/good-feedback.png"
                            alt=""
                          />
                          Gives Back
                        </button>

                        <button className="px-2 my-2  py-1 flex items-center gap-2 border rounded-xl border-gray-500 hover:bg-black hover:text-white">

                         LGBTQ Owned
                        </button>
                        <button className="px-2 my-2  py-1 flex items-center gap-2 border rounded-xl border-gray-500 hover:bg-black hover:text-white">
                          <img
                            className="w-4 h-4 "
                            src="/scissors.png"
                            alt=""
                          />
                          handmade
                        </button>
                        <button className="px-2 my-2  py-1 flex items-center gap-2 border rounded-xl border-gray-500 hover:bg-black hover:text-white">
                          <img
                            className="w-4 h-4 "
                            src="/ecological.png"
                            alt=""
                          />
                        eco friendly
                        </button>
                        <button className="px-2 my-2  py-1 flex items-center gap-2 border rounded-xl border-gray-500 hover:bg-black hover:text-white">
                          <img
                            className="w-4 h-4 "
                            src="/cargo.png"
                            alt=""
                          />
                         Not on Amazone
                        </button>
                      </div>
                      <div className="2 w-1/2">
                        <button className="px-2 my-2 py-1 flex items-center gap-2 border rounded-xl border-gray-500 hover:bg-black hover:text-white">
                        <img
                            className="w-4 h-4 "
                            src="/business.png"
                            alt=""
                          />
                          women owned
                        </button>
                        <button className="px-2 my-2 py-1 flex items-center gap-2 border rounded-xl border-gray-500 hover:bg-black hover:text-white">
                          <img
                            className="w-4 h-4 "
                            src="/organic-food.png"
                            alt=""
                          />
                        organic
                        </button>

                      </div>
                    </div>
                  </div>
                )}
              </>
            );
          })}
      </div>
      <hr />
      <div>
        <Pagination
          totalPages={82}
          currentPage={65}
          onPageChange={() => {}}
        />
      </div>
      <hr />
    </div>
  );
};

export default Products;
