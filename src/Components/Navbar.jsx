import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Navbar() {

  const cartProducts = useSelector(state => state.cart);

  return (
    <div>
      <nav className="w-full h-auto">
        <div className="flex justify-between">
          <div className="flex justify-center items-center  py-3 px-5">
          <Link to="/">
          <h1 className="font-bold text-4xl text-gradient bg-clip-text text-transparent bg-gradient-to-br from-amber-500 via-amber-700 to-purple-600 p-5 rounded-md border border-solid border-blue-600 mt-2">
              Product Store
            </h1>
          </Link>
           
          </div>

          <div className="absolute flex lg:justify-end justify-center lg:right-10 lg:top-0 p-5 ml-10 mt-7  my-auto right-0">
            <Link to="/cart">
            <span class="absolute left-8 bottom-8  bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white font-bold"> {cartProducts.length} </span>
              <FaShoppingCart className="text-white text-2xl" />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
