"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import { menuButtons } from "@/constants/constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const [active, setActive] = useState(false);

  return (
    <div className="flex justify-between relative items-center py-2 px-4 text-orange-600">
      <span className="md:hidden">
        <MenuIcon
          className="cursor-pointer "
          fontSize="large"
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>
      {showMenu && (
        <div className="menu bg-black bg-opacity-80 h-screen w-11/12 absolute top-16 mt-2 md:hidden">
          <ul className="text-white m-5 flex flex-col items-center h-3/4 justify-around">
            {menuButtons.map((button) => (
              <li key={button.id} className={`hover:text-red-600 `}>
                <a href={button.url} onClick={() => setShowMenu(false)}>
                  {button.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Image src={logo} alt="Burgers" width={60} height={60} />
      <button className="my-6 text-white hidden bg-orange-600 py-3 px-6 hover:bg-black transition-all ease-in-out md:block">
        contact us
      </button>
      <span className="md:hidden">
        <PhoneIcon fontSize="large" className="cursor-pointer" />
      </span>
    </div>
  );
};

export default Navbar;
