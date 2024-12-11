import React from "react";
import { FaStar } from "react-icons/fa";

const MenuItem = ({ item }) => {
  return (
    <div className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm">
      <img
        src={item.thumbnail}
        alt={item.name}
        className="h-16 w-16 object-cover rounded-md mr-4"
      />
      <div className="flex-grow">
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600 text-sm">{item.description}</p>
        <p className="text-gray-700 font-bold">{item.price}</p>
      </div>
      <div className="flex items-center">
        <div className="flex text-ratings text-lg">
          {[...Array(Math.floor(item.rating))].map((_, index) => (
            <FaStar key={index} />
          ))}
          {item.rating % 1 > 0 && <FaStar className="text-ratings" />}
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
