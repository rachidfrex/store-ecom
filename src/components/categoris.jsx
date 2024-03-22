import React from "react";
import mans from "../assets/images/mans.jpg";
import womans from "../assets/images/woman.jpg";
function Categoris() {
  return (
    <div>
      <h1 className="text-3xl font-bold  uppercase text-center py-10 text-violet-500">
        Categoris
      </h1>

      <div className="grid grid-cols-2 gap-5 px-20 ">
        <div className=" relative ">
          <div className="relative">
            <img
              src={mans}
              alt="mans"
              className="rounded-md w-full h-auto object-cover aspect-video relative  "
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-purple-100 rounded-md
            duration-500 ease-in-out transform  hover:to-90%
            "></div>
          </div>
          <h1 className="absolute bottom-20  left-5 text-4xl font-semibold text-purple-700  pt-2">
            Mans
          </h1>
          <p
          className="absolute bottom-10  left-5 text-lg font-semibold text-purple-700 pt-2 "
          >
            the best clothes and accessories for man 
          </p>
        </div>
        <div
        className=" relative "
        >
          <div className="relative rounded-md overflow-hidden">
            <img
              src={womans}
              alt="womans"
              className="rounded-md w-full h-auto object-cover aspect-video relative"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-purple-100 rounded-md 
              duration-500 ease-in-out transform  hover:to-90%
            "></div>
          </div>
          <h1 className="absolute bottom-20  left-5 text-4xl font-semibold text-purple-700  pt-2">
            Woman
          </h1>
          <p
          className="absolute bottom-10  left-5 text-lg font-semibold text-purple-700  pt-2"
          >
            the best clothes and accessories for woman 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Categoris;
