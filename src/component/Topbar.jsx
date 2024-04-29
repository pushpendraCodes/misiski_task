import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { TbFlagPause } from "react-icons/tb";
import { VscGlobe } from "react-icons/vsc";

const Topbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBarRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([
    {
      brand: "nike",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mURUpDDSiSt2zKcCYaVQCAew63wR-JnnaQ&s",
    },
    {
      brand: "adida",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLskjLwtCuF7Pqu8RrbUXVCipnTR2IpVwSiw&s",
    },
    {
      brand: "puma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTGzZlZ0OwtKgChJ3jXtC1yVCJQ45Knpi1A&s",
    },
    {
      brand: "puma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9xXf7dwl-JtUQuWD9yRPjh5IZUZZQuPSqBQ&s",
    },
  ]);
  const [langs, setLangs] = useState([
    "Hindi",
    "English(us)",
    "french(uk)",
    "spanish",
    "madrin",
    "arabic",
    "arabic",
    "arabic",
    "arabic",
    "arabic",
    "arabic",
  ]);

  const [isLangOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        // Clicked outside the search bar, close it
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Fetch suggestions based on the current query
  };

  return (
    <>
      <div
        style={{ backgroundColor: "rgb(251, 248, 246)" }}
        className="text-center  w-full px-2 py-3 my-2 ">
        <p className="paragraph">
          Shop wholesale online from over 1,00,000 brands.{" "}
          <a
            style={{ textDecoration: "underline" }}
            href="">
            signup
          </a>
        </p>
      </div>

      <div className="searchbar my-3 flex w-full items-center ">
        <div className="w-2/12 flex   ">
          <img
            className="m-auto"
            src="https://cdn.faire.com/static/logo.svg"
            alt=""
          />
        </div>

        <div
          onBlur={() => setIsSearchOpen(false)}
          ref={searchBarRef}
          className=" search w-5/12 flex z-20 search-bar-container items-center relative">
          <input
            className="w-[90%] border-none focus:outline-none mx-4 h-full "
            placeholder="  products or brand"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => setIsSearchOpen(true)}
          />

          {!isSearchOpen ? (
            <CiSearch
              size={20}
              className=" cursor-pointer mx-2 "
            />
          ) : (
            <RxCross2
              onClick={(event) => {
                event.stopPropagation();
                alert("cehfvhe");
              }}
              size={20}
              className="mx-2  cursor-pointer  "
            />
          )}

          {searchQuery && isSearchOpen && (
            <div className="suggestion-box px-3  ">
              <p className=" py-2 font-semibold">Brands</p>
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  className="suggestion-item  flex gap-5 items-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={suggestion.img}
                    alt=""
                  />
                  <p>{suggestion.brand}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setLangOpen(true)}
          onMouseLeave={() => setLangOpen(false)}
          className="w-1/12 text-center relative flex items-center px-3">
          <VscGlobe size={20} />
          <p className="w-full cursor-pointer ">EN-US</p>

          {isLangOpen && (
            <div className="lang-box z-20 px-3  ">
              {langs.map((lang, index) => (
                <div
                  key={index}
                  className="lang-item my-3 text-left ">
                  <p>{lang}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="w-2/12 flex items-center justify-between">
          <p>Blog</p>
          <p>Sell on Fair</p>
          <p>Sign In</p>
        </div>
        <div className="w-2/12 text-center ">
          <button className="bg-gray-900 w-[70%] px-3 py-1 text-white">
            {" "}
            Sign Up to shop
          </button>
        </div>
      </div>
    </>
  );
};

export default Topbar;
