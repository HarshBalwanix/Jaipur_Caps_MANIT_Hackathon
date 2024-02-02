import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../data/navbar-links";
import ProfileDropDown from "../core/auth/ProfileDropDown";
import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="relative flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div
        className={`${
          isNavOpen
            ? "relative flex flex-col gap-6 px-8 bg-richblack-800 h-fit w-[70%] mx-auto py-8 top-[150px] rounded-md transition-all ease-in duration-[2000ms] delay-1000 z-10000"
            : "hidden lg:flex w-11/12 max-w-maxContent items-center justify-between"
        }`}
      >
        {/* Image */}
        <img src={logo} width={160} height={42} loading="lazy" />

        {/* Nav Links */}
        <nav className="md:block">
          <ul className="lg:flex gap-x-6 gap-y-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div
                    className={`group relative flex cursor-pointer items-center gap-1 ${
                      isNavOpen ? "text-yellow-25" : "text-richblack-25"
                    }`}
                  >
                    <p>{link.title}</p>
                  </div>
                ) : (
                  <p
                    className={`${
                      isNavOpen ? "text-yellow-25" : "text-richblack-25"
                    }`}
                  >
                    {link.title}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login/SignUp/Dashboard */}
        <div className={"md:flex items-center gap-x-4 space-x-4"}>
          <button className="relative text-[24px] text-richblack-5">
            <AiOutlineShoppingCart />
            <span className="text-[16px] text-richblack-100 absolute -top-4 left-2">
              0 {/* Replace with dynamic count */}
            </span>
          </button>

          <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md hover:text-yellow-50">
            Log in
          </button>

          <button className="border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md hover:text-yellow-50">
            Sign Up
          </button>

          {/* Replace with your user profile dropdown component */}
          <ProfileDropDown />
        </div>
      </div>

      {/* Large case logo */}
      <div className="flex !justify-center md:hidden">
        <img src={logo} width={160} height={42} loading="lazy" />
      </div>

      <button
        className="absolute !left-5 md:hidden"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
      </button>
    </div>
  );
};

export default Navbar;
