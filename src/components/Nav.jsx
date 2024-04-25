import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { GiGreenPower } from "react-icons/gi";
const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { name: "Sell on Ecoyaan", link: "/sellonecoyaan" },
    { name: "Careers", link: "/careers" },
  ];

  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-40 ">
      <div className="md:flex pt-10 items-center justify-between bg-white py-1 md:px-10 px-2">
        <div className="flex items-center text-green-900 font-bold cursor-pointer text-2xl font-[poppins] ">
          <span className="mr-2   pt-2">
            <GiGreenPower class=" size-9" />
          </span>
          <span className=" text-3x1 ">Ecoyaan</span>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="tex-3x1 absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <GiHamburgerMenu name={open ? "Close" : "Menu"} />
        </div>
        <ul
          className={`md:flex md:items-center md:pb-8 pb-12 font-semibold absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? `top-20` : `top-[-400px]`
          } `}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 text-xl mr-10 my-7" key={link.id}>
              <a
                className="text-gray-800 hover:text-gray-400 duration-500"
                href={link.link}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
