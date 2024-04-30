import React, { useState } from "react";
import { CiGlobe } from "react-icons/ci";

const Footer = () => {
  const [appleQR, setApple] = useState(false);
  const [googleQR, setGoogle] = useState(false);
  return (
    <div className="mt-6 w-[90%] m-auto">
      <p className="text-black">
        Discover products for your store on the Faire wholesale marketplace
      </p>
      <p className="text-gray-400 my-4">
        At Faire, we're empowering small business owners and independent brands
        to buy and sell wholesale goods online. If you're a retailer shopping
        for wholesale products, Faire offers you straight-forward financial
        terms and logistics that were previously only available to large retail
        chains. We also provide powerful sales, marketing, and analytics tools
        for brands, so sellers can simplify their wholesale businesses and
        expand their reach of independent shop owners.
      </p>
      <hr />
      <div className="flex mt-10 px-10 py-10">
        <div className="1 w-2/3 flex ">
          <div className="w-1/5 flex flex-col gap-2">
            <p className="text-black ">Company</p>
            <p>About Us</p>
            <p>Newsroom</p>
            <p>Career</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <p className="text-black ">Support</p>
            <p>Help Center</p>
            <p>Fauer Markets</p>
            <p>sell on faier</p>
          </div>
          <div className="w-1/5 flex flex-col gap-2">
            <p className="text-black ">Connect</p>
            <p>Blog</p>
            <p>Instagram</p>
            <p>Tweeter</p>
            <p>Facebook</p>
          </div>
          <div className="w-1/5"></div>
          <div className="w-1/5"></div>
        </div>
        <div className="2 w-1/3">
          <p className="text-lg ">Get the Faire app</p>
          <p>
            Shop on the go, message brands, and track orders with the Faire app.
          </p>
          <div className="flex justify-between items-center my-3">
            <div
              onMouseLeave={() => setApple(false)}
              onMouseEnter={() => setApple(true)}
              className=" relative ">
              <img
                //   s
                src="https://cdn.faire.com/static/download-badges/app-store-en.svg"
                alt=""
              />
             {
                appleQR && <div className="apple-qr ">
                <img
                  className="w-32"
                  src="https://cdn.faire.com/fastly/3d77d319b263789c7bf9e0d352daa4d5f80ace5d3a1d46f1d532d4c6b7a13c71.png?dpr=1.5&format=jpg&height=120&width=120"
                  alt=""
                />
              </div>
             }
            </div>
            <div
              onMouseEnter={() => setGoogle(true)}
              onMouseLeave={() => setGoogle(false)}
              className=" relative  ">
              <img
                className="w-40"
                src="https://cdn.faire.com/static/download-badges/google-play-en.png"
                alt=""
              />
              {
                googleQR &&
                <div className="google-qr ">
                <img
                  className="w-32"
                  src="https://cdn.faire.com/fastly/3d77d319b263789c7bf9e0d352daa4d5f80ace5d3a1d46f1d532d4c6b7a13c71.png?dpr=1.5&format=jpg&height=120&width=120"
                  alt=""
                />
              </div>
              }
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="mt-10">
        <p>©2024 Faire Wholesale, Inc.</p>
        <div className="flex my-4 justify-between">
          <div className="flex gap-3">
            <p>Terms of Service</p>
            <p>. Privacy Policy</p>
            <p>.Cookie Policy</p>
            <p>. IP Policy</p>
            <p>. Sitemap</p>
          </div>
          <div>
            <p className="flex  gap-1 items-center">
              {" "}
              <CiGlobe /> English(US)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
