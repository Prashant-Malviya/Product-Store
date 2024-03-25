import React from "react";
import Products from "./Products";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import ProductRating from "./ProductRating";
import { BsFillCartXFill } from "react-icons/bs";
import { remove } from "../store/cartSlice";
import toast from "react-hot-toast";

function Cart() {
  const cartProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const removeFromCart = (id) =>{
    dispatch(remove(id));
    toast.remove("Item Removed Successfully")
  }

  const product = cartProducts.map((product) => (
    <div key={product.id}>
      <div className="border-gradient-br border border-amber-500 via-blue-500 to-purple-500 border-solid p-5 h-auto w-auto m-12 rounded-md lg:hover:scale-110 ease-in-out text-white">
        <div className="rounded-md flex justify-center items-cente p-2 border border-blue-300 ">
          {/* <div><span>39% OFF</span></div> */}
          <img src={product?.image} alt="shirt-image" className="rounded-md" />
        </div>

        <div className="text-left lg:text-2xl md:text-2xl text-xl py-2">
          <h2>{product.title}</h2>
        </div>

        <div className="text-left flex flex-row flex-wrap ">
          <span className="">
            <span className="text-2xl font-bold mr-1">${product.price}</span>
            <span className="text-sm line line-through mt-2">
              ${product?.price + 255}
            </span>
          </span>

          <div className="flex flex-row lg:mx-3 md:mx-3 mx-0">
            <ProductRating rating={product?.rating?.rate} />
          </div>

          <div className="px-3 py-0.5 bg-yellow-200 mr-2 rounded-lg font-bold text-black">
            {product.rating.count}
          </div>
        </div>
        <div className="flex justify-center items-center mt-3">
          <button
            className="px-5 py-2 text-center bg-slate-900 font-bold text-white lg:text-xl md:text-xl text-xs w-full flex justify-center rounded-md hover:bg-slate-800"
            onClick={() => removeFromCart(product.id)}
          >
            <BsFillCartXFill className="mx-2 lg:text-2xl md:text-2xl text-xl" />
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="bg-gradient-to-br from-blue-500 via-black to-purple-500">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {product}
      </div>
    </div>
  );
}

export default Cart;
