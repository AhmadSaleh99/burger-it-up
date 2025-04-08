import { menuList } from "@/constants/constants";
import React from "react";

const MenuList = () => {
  return (
    <div id="menu" className=" mx-4 my-8 flex flex-wrap justify-center gap-6">
      {menuList.map((menuItem) => (
        <div
          key={menuItem.id}
          className=" cursor-pointer relative h-80 w-full sm:w-72 md:w-80 rounded-2xl overflow-hidden shadow-lg group"
          style={{
            backgroundImage: `url(${menuItem.imgUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute bg-black inset-0 opacity-50 transition-opacity group-hover:opacity-40 " />
          <div className="z-10 relative flex flex-col items-center justify-center h-full px-4 text-center hover:scale-105 transition-transform">
            <h1 className="text-white text-xl font-semibold mb-2 drop-shadow">
              {menuItem.title}
            </h1>
            <p className="text-gray-200 text-sm drop-shadow">{menuItem.des}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
