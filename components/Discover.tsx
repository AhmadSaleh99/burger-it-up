import React from "react";
import ImageSlider from "./ImageSlider";

const Discover = () => {
  return (
    <section
      id="aboutus"
      className="flex  gap-7 justify-center justify-self-center my-7 max-w-6xl w-full items-center flex-col md:flex-row"
    >
      <ImageSlider />
      <div className="flex justify-center items-center m-4 text-justify flex-col">
        <h4 className="text-3xl my-2">Discover</h4>
        <h1 className="text-6xl mb-5 ">Our Burger</h1>
        <p className="text-gray-800">
          Our goal at Burger Mania is to make the best dam burger you ever had.
          We know how to do this,too. With fresh, wholesome ingredients and lots
          of TLC. From the patties we grill to the buns we serve them on - your
          best burger is our priority.
        </p>
        <button className="my-6  w-2/3 text-white bg-red-600 py-3 hover:bg-black transition-all ease-in-out">
          More About Us
        </button>
        <button className="w-2/3 text-red-600 border-2 border-red-600 py-3 hover:bg-red-600 hover:text-white transition-all ease-in-out">
          See the menu
        </button>
      </div>
    </section>
  );
};

export default Discover;
