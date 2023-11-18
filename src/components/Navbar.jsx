import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className=" w-full fixed z-10">
      <div>
        <div className=" flex flex-row justify-between p-5 md:px-32 px-5 bg-[#7071E8] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold">BeatBlitz</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to="home" spy={true} smooth={true} duration={500} className=" cursor-pointer">Home</Link>
            <Link to="home" spy={true} smooth={true} duration={500} className=" cursor-pointer">About</Link>
            <Link to="home" spy={true} smooth={true} duration={500} className=" cursor-pointer">Features</Link>
            <Link to="home" spy={true} smooth={true} duration={500} className=" cursor-pointer">Product</Link>
            <Link to="home" spy={true} smooth={true} duration={500} className=" cursor-pointer">Contact</Link>
            <Link to="home" spy={true} smooth={true} duration={500} className=" cursor-pointer">Faq</Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
