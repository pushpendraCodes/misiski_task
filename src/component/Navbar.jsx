import React from "react";
import Topbar from "./Topbar";
import MenuBar from "./MenuBar";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-30 bg-white">
      <Topbar />
      <MenuBar />
    </div>
  );
};

export default Navbar;
