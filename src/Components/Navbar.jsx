import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="flex flex-wrap justify-center items-center grid grid-cols-1 ">
          <div className="flex justify-center items-center  py-3 px-5">
          <Link to="/">
          <h1 className="font-bold text-4xl text-gradient bg-clip-text text-transparent bg-gradient-to-br from-amber-500 via-amber-700 to-purple-600 p-5 rounded-md border border-solid border-blue-600 mt-2">
              Product Store
            </h1>
          </Link>
           
          </div>

          <div className="absolute flex lg:justify-end justify-center lg:right-10 lg:top-10 p-5">
            <Link to="/cart">
              <FaShoppingCart className="text-white text-2xl" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
