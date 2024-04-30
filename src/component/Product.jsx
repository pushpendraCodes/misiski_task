import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
const Product = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const sliderRef = useRef(null);
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };
  return (
    <div className="max-w-[200px]  bg-white shadow-lg rounded-lg overflow-hidden relative">
      <Slider ref={sliderRef} {...settings}>
        {product.images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Product ${index + 1}`}
              className="w-full h-52 object-cover"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity duration-300">
        <button
          className=" bg-white bg-opacity-50 text-white p-2  mx-2 focus:outline-none"
          onClick={goToPrevSlide}>
          <BsChevronLeft
            color="black"
            size={24}
          />
        </button>
        <button
          className="bg-white bg-opacity-50 text-white p-2  mx-2 focus:outline-none"
          onClick={goToNextSlide}>
          <BsChevronRight
            color="black"
            size={24}
          />
        </button>
      </div>
      <div className="px-4 my-4 py-2 text-center">
        <h2 className="text-gray-800 text-sm font-semibold">{product.name}</h2>
        {/* <p className="mt-2 text-gray-600">{product.description}</p> */}
        <div className="mt-2  text-center ">
          <p className="text-gray-700  flex items-center justify-center gap-1 font-bold">

            <FaStar /> {product.rating}
            <span className="text-gray-400 font-light">

              {product.isNew && "New Items"}
            </span>
          </p>
          <p className="text-red-800">
            {product.isFreeShipping && "free shipping"}
          </p>
          {/* <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add to Cart
          </button> */}
        </div>
      </div>

    </div>
  );
};

export default Product;
