import React, { useEffect, useState } from "react";
import Product from "./Product";
import { FaShoppingCart } from "react-icons/fa";
import Loading from "./Loading";

function Products() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    //api
    try {
      fetch("https://fakestoreapi.com/products")
        .then((data) => data.json())
        .then((result) => {
          setProducts(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  },[]);

  return (
    <div className="bg-black w-full h-screen">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
        <Loading />
        </div>
      ) : products.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full h-screen bg-black">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <span className="text-5xl text-white shadow-lg shadow-slate-200">
            Data Not Found
          </span>
        </div>
      )}
    </div>
  );
}

export default Products;
