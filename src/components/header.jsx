import React from "react";
import cloths from "../assets/images/clothees.png";
function Header() {
  return (
    <div className="flex flex-row  items-center gap-5 h-auto py-10  relative  font-semibold  px-20 w-full  ">
      <div className="flex flex-col gap-5 ">
        <h1 className="text-5xl font-bold text-slate-600 uppercase">
          the best products for you and your family{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <button className="bg-violet-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-violet-700 transition duration-300 ease-in-out">
            shop now
          </button>
        </div>
      </div>
      {/* images */}
      <div>
        <img src={cloths} alt="cloths" className="rounded-md "  />
      </div>
    </div>
  );
}

export default Header;
