import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@/public/images/logo.png";
import Image from "next/image";
import PhoneIcon from "@mui/icons-material/Phone";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 px-4 text-orange-600">
      <MenuIcon className="cursor-pointer " fontSize="large" />
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
