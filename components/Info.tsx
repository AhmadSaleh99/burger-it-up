import React from "react";
import { LocalDining, Grass, LocalCafe, Icecream } from "@mui/icons-material"; // Import relevant Material-UI icons

const Info = () => {
  const infoItems = [
    {
      text: "All of our meat comes from farm-fed, humanely raised cattle.",
      logo: <LocalDining fontSize="large" className="text-orange-600" />, // Icon for meat
    },
    {
      text: "Our toppings are 100% organic, locally grown, and arrive fresh daily.",
      logo: <Grass fontSize="large" className="text-green-600" />, // Icon for organic/eco-friendly
    },
    {
      text: "All of our cheeses are made from organic goat and cow milk.",
      logo: <LocalCafe fontSize="large" className="text-yellow-600" />, // Icon for dairy/cheese
    },
    {
      text: "Our shakes are made with organic ice cream from a local creamery.",
      logo: <Icecream fontSize="large" className="text-pink-600" />, // Icon for ice cream
    },
  ];

  return (
    <section className="mt-16 mx-4">
      <div className="flex flex-col flex-wrap sm:flex-row sm:gap-12 gap-8 justify-center items-center">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center text-center bg-white rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300 w-full sm:w-[280px] md:w-[320px]"
          >
            <span className="mb-4 sm:mb-0">{item.logo}</span>
            <p className="text-gray-700 text-lg sm:text-xl sm:text-center mt-2 sm:mt-0">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
