import React from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";

const SingleItem = () => {
  return (
    <div className="max-w-xs w-full font-body text-gray-900 rounded-lg shadow-md overflow-hidden bg-white transition-all hover:shadow-lg hover:scale-105 transform duration-300">
      <div className="relative">
        <img
          className="object-cover h-48 w-full"
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbmVha2Vyc3xlbnwwfDB8fHwxNzEyMjIzNDAyfDA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="Converse sneakers"
        />
        <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-md shadow-sm">
          $60
        </span>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-base font-semibold text-gray-800 truncate">
          Converse Sneakers
        </h2>

        <div className="flex items-center gap-1 text-yellow-500">
          {[1, 2, 3, 4].map((el) => (
            <FaStar key={el} className="text-sm" />
          ))}
          <span className="text-xs text-gray-600 ml-1">(12 reviews)</span>
        </div>

        <button className="flex justify-between items-center mt-2 py-2 px-3 bg-primary text-white text-sm font-bold rounded-md transition-all hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary">
          <span>View Details</span>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
