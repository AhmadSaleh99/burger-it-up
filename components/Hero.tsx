import React from "react";
// import heroImage from "public/images/hero.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center items-center flex-col h-[70vh] bg-[url(/images/hero.jpg)] bg-no-repeat bg-cover">
        <h4 className="text-3xl my-2">burgers & shakes</h4>
        <h1 className="text-6xl mb-2">BESTMEAL</h1>
        <button className="text-orange-500 hover:text-black duration-100 ease-in-out bg-opacity-80 bg-white w-1/2 py-2">
          Book a Table
        </button>
      </div>
      <div className="flex flex-col mx-3 my-10 text-gray-800">
        <div className="flex gap-16  items-center text-red-600">
          <div className="clock">clock</div>
          <div className="flex-1">
            <div className="flex justify-between">
              <span>Sun - Wed </span> <span>10:00 - 23:30</span>
            </div>
            <div className="flex justify-between">
              <span>Thu - Sat </span> <span>10:00 - 1:00</span>
            </div>
          </div>
        </div>
        <div className="flex gap-7 my-10 items-center">
          <span>location</span>{" "}
          <div className="flex flex-col">
            <span>10 Street Name, City Name</span>{" "}
            <span>Country, Zip Code</span>
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <span>burger</span>{" "}
          <div className="flex flex-col">
            <span>555 555-5555</span> <span>email@emailservice.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
