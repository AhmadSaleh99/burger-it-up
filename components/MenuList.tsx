import { menuList } from "@/constants/constants";
import React from "react";

const MenuList = () => {
  return (
    <div className="flex w-full mx-3 flex-wrap gap-2 h-64 justify-between items-center">
      {menuList.map((menuItem) => (
        <div
          key={menuItem.id}
          className="bg-no-repeat bg-cover h-64  mr-2 w-fullg"
          style={{ backgroundImage: `url(${menuItem.imgUrl})` }}
        >
          <h1>{menuItem.title}</h1>
          <p className="text-gray-200">{menuItem.des}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
