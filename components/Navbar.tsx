"use client";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
import { menuButtons } from "@/constants/constants";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(menuButtons[0].id);

  const handleClick = (id: number) => {
    setActive(id);
    setShowMenu(false);
  };

  return (
    <div className="flex justify-between relative items-center py-2 px-4 text-orange-600">
      <span className="">
        <MenuIcon
          className="cursor-pointer"
          fontSize="large"
          onClick={() => setShowMenu(!showMenu)}
        />
      </span>

      {showMenu && (
        <div className="bg-black bg-opacity-80 h-[400px] w-[300px] absolute top-[4.3rem] mt-2 rounded-2xl ">
          <ul className="text-white m-5 flex flex-col items-center h-3/4 justify-around">
            {menuButtons.map((button) => (
              <li
                key={button.id}
                className={`hover:text-red-600 ${
                  active === button.id && "text-red-600"
                }`}
              >
                <a href={button.url} onClick={() => handleClick(button.id)}>
                  {button.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <Image src={logo} alt="Burgers" width={60} height={60} />
      <button className=" text-white hidden bg-orange-600 py-3 px-6 hover:bg-black transition-all ease-in-out md:block">
        contact us
      </button>
      <span className="md:hidden">
        <PhoneIcon fontSize="large" className="cursor-pointer" />
      </span>
    </div>
  );
};

export default Navbar;
