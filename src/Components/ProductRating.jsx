import React from 'react';
import { FaStar } from "react-icons/fa";



const ProductRating = ({ rating }) => {
  // Calculate the number of filled stars
  const filledStars = Math.round(rating);

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          // className='h-4 w-4'
          className={`h-4 w-4 ${index < filledStars ? 'text-yellow-300' : 'text-gray-300'}`}
        />
      ))}
    </div>
  );
};

export default ProductRating;
