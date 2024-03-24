import React, { useEffect, useState } from "react";
import Product from "./Product";
import { FaShoppingCart } from "react-icons/fa";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //api
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  });

  return (
    <div className="bg-black">
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
