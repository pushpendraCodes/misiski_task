import React from "react";
import Topbar from "./Topbar";
import MenuBar from "./MenuBar";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="md:sticky md:top-0 z-30   ">
      <div className=" hidden md:block  z-30 bg-white">
        <Topbar />
        <MenuBar />
      </div>
      <div className="  sticky top-0 z-30  md:hidden block">
      <MobileMenu />
      </div>

    </div>
  );
};

export default Navbar;
