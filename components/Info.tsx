import React from "react";

const Info = () => {
  return (
    <section className="flex gap-2 justify-center mt-16 mx-4 flex-col items-center sm:flex-row sm:gap-8">
      <div className="firstGroup ">
        <div className="firstelement px-11 text-center flex flex-col mb-2 gap-2 justify-center items-center">
          <span>logo </span>{" "}
          <p> All of our meat comes from farm-fed, humanely raised cattle.</p>
        </div>
        <div className="secondelement flex px-11 text-center flex-col gap-2 justify-center items-center">
          <span>logo </span>{" "}
          <p>
            {" "}
            Our toppings are 100% organic,locally grown, and arrive fresh daily.
          </p>
        </div>
      </div>
      <div className="secondGroup">
        <div className="firstelement flex px-11 text-center flex-col mb-2 gap-2 justify-center items-center">
          <span>logo </span>{" "}
          <p> All of our cheeses are made from organic goat and cow milk. </p>
        </div>
        <div className="secondelement flex px-11 text-center flex-col gap-2 justify-center items-center">
          <span>logo </span>{" "}
          <p>
            {" "}
            Our Shakes are made with organic ice cream from a local creamery
          </p>
        </div>
      </div>
    </section>
  );
};

export default Info;
