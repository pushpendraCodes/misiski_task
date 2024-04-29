import React, { useState } from "react";
import { menus } from "../util/menu";
import { useSearchParams } from "react-router-dom";

const MenuBar = () => {
  const [hoveredMenu, setMenuHoverd] = useState(0);
  const [hoveredSubmenu, setSubmenu] = useState(1);
  console.log(hoveredMenu, "hoveredMenu");
  return (
    <div

      onMouseLeave={() => setMenuHoverd(0)}
      className="w-full pb-4 flex justify-center my-6  ">
      <div className="w-4/5 flex justify-between relative">
        {menus &&
          menus.map((item) => {
            return (
              <p
                onMouseEnter={() => setMenuHoverd(item.id)}
                key={item.id}
                className="cursor-pointer hover:underline">
                {item.name}
              </p>
            );
          })}

        {hoveredMenu !== 0 && (
          <div className="submenu-box flex text-md z-20 ">
            <div className="1 w-1/4 border-r my-4 border-gray-300 px-2">
              {menus[hoveredMenu - 1].submenus.map((item) => {
                return (
                  <p
                  key={item.id}
                    onMouseEnter={() => setSubmenu(item.id)}
                    className={`p-1 my-1 ${
                      hoveredSubmenu === item.id && "text-black bg-gray-200"
                    } hover:text-black hover:bg-gray-200 cursor-pointer`}>
                    {item.name}
                  </p>
                );
              })}
            </div>
            <div className="2 w-1/4 my-4 px-2">
              {menus[hoveredMenu - 1]?.submenus[hoveredSubmenu - 1]?.submenus
                .slice(0, 12)
                .map((item) => {
                  return (
                    <p className="p-1 my-1 hover:text-black cursor-pointer">
                      {item}
                    </p>
                  );
                })}
            </div>
            <div className="3 w-1/4 my-4">
              {menus[hoveredMenu - 1].isFeatured ? (
                <>
                  <p className="p-1 my-1 font-semibold ml-5 ">
                    Featured
                  </p>
                  <p className="p-1 my-1 hover:text-black  ml-5 cursor-pointer">
                    New Brands
                  </p>
                  <p className="p-1 my-1 hover:text-black ml-5 cursor-pointer">
                    New New Products
                  </p>
                </>
              ) : (
                menus[hoveredMenu - 1]?.submenus[hoveredSubmenu - 1]?.submenus
                  .slice(12, 24)
                  .map((item) => {
                    return (
                      <p className="p-1 my-1 hover:text-black cursor-pointer">
                        {item}
                      </p>
                    );
                  })
              )}
            </div>
            <div className="4 w-1/4 my-4">
              <img
                src={
                  menus[hoveredMenu - 1]?.submenus[hoveredSubmenu - 1]?.Image
                }
              />
              <p className="my-2 font-bold">
                {
                  menus[hoveredMenu - 1]?.submenus[hoveredSubmenu - 1]
                    ?.imageHeading
                }{" "}
              </p>
              <p className="">
                {
                  menus[hoveredMenu - 1]?.submenus[hoveredSubmenu - 1]
                    ?.imageText
                }{" "}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
