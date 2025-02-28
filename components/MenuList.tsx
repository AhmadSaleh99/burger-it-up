import { menuList } from "@/constants/constants";
import React from "react";

const MenuList = () => {
  return (
    <div className="flex gap-1 mx-3 justify-center items-center flex-wrap">
      {menuList.map((menuItem) => (
        <div
          key={menuItem.id}
          className="bg-no-repeat relative bg-cover h-80 w-full -z-20 flex justify-center items-center flex-col sm:w-80 "
          style={{ backgroundImage: `url(${menuItem.imgUrl})` }}
        >
          <div className="h-full w-full absolute bg-black -z-10 opacity-45" />
          <h1 className="text-white">{menuItem.title}</h1>
          <p className="text-gray-200">{menuItem.des}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
