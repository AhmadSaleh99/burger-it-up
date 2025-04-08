import React from "react";
import "./hero.css";
// import heroImage from "public/images/hero.jpg";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LunchDiningOutlinedIcon from "@mui/icons-material/LunchDiningOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
const Hero = () => {
  return (
    <section id="home">
      <div className="flex justify-center items-center flex-col h-[100vh] bg-[url(/images/hero.jpg)] bg-no-repeat bg-cover">
        <div>
          <svg className="f1">
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">
              Burgers & Shakes
            </text>
          </svg>
        </div>
        <div className="wrapper">
          {" "}
          <svg>
            <text x="50%" y="50%" dy=".15em" text-anchor="middle">
              BESTMEAL
            </text>
          </svg>
        </div>
        <button className="text-orange-500 hover:text-black duration-100 ease-in-out bg-opacity-80 bg-white w-1/4 py-2">
          Book a Table
        </button>
      </div>
      <div className="flex justify-between flex-col mx-2 my-4 text-gray-800 md:flex-row">
        <div className="flex gap-7 mt-3 items-center border-r-2 pr-2 text-red-600 flex-1">
          <WatchLaterIcon fontSize="large" />{" "}
          <div className="flex-1">
            <div className="flex justify-between">
              <span>Sun - Wed </span> <span>10:00 - 23:30</span>
            </div>
            <div className="flex justify-between">
              <span>Thu - Sat </span> <span>10:00 - 1:00</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 gap-7 mt-3 items-center border-r-2 pr-2 md:pl-3">
          <LocationOnOutlinedIcon fontSize="large" />{" "}
          <div className="flex flex-col">
            <span>10 Street Name, City Name</span>{" "}
            <span>Country, Zip Code</span>
          </div>
        </div>
        <div className="flex flex-1 gap-7 mt-3  items-center border-r-2 pr-2 md:pl-3">
          <LunchDiningOutlinedIcon fontSize="large" />{" "}
          <div className="flex flex-col">
            <span>555 555-5555</span> <span>email@emailservice.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
