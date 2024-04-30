import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Explore = ({ images }) => {


  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md z-10"
        onClick={onClick}>
        <BsChevronLeft size={24} />
      </button>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full shadow-md z-10"
        onClick={onClick}>
        <BsChevronRight size={24} />
      </button>
    );
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "60px",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (

    <div className="max-w-[90%] m-auto">
    <div style={{ fontFamily: "nantes, georgia, serif" }} className="flex justify-between my-4">
        <p></p>
        <p className="text-xl">Keep exploring</p>
        <p className="underline">All Brands</p>
    </div>
    <div className="max-w-screen-lg mx-auto py-8 relative">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div
            key={index}
            className="px-2">
            <img
              src={image.src}
              alt={image.name}
              className="rounded-lg"
            />
            <p className="text-center underline mt-2 text-sm">{image.name}</p>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Explore;
