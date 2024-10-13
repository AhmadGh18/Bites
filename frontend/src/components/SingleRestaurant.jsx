import React from "react";
import img from "../assets/imageslog.png";
import {
  FaBookmark,
  FaMapMarked,
  FaMapMarker,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const SingleRestaurant = () => {
  return (
    <div className="md:h-[80vh] h-auto bg-white shadow-lg rounded-lg mt-3 overflow-hidden font-body transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      <div className="h-[60%] relative">
        <img
          src={img}
          alt="Restaurant"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-3 right-5">
          <div className=" p-2 rounded-full shadow-md transition-all duration-300 bg-primary">
            <FaBookmark className="text-white hover:text-white text-xl" />
          </div>
        </div>
      </div>
      <div className="p-4 text-gray-800 space-y-2 bg-gray-50 h-full pb-7">
        <h2 className="text-xl font-semibold text-gray-700">Bar . Siada</h2>
        <p className="text-sm text-gray-500">Restaurant Name</p>
        <div className="flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt className="text-gray-700" />
          <p className="text-sm">Siaida near Abou Ali</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex text-yellow-400 text-lg">
            {[1, 2, 3, 4].map((el) => (
              <FaStar key={el} />
            ))}
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-sm text-gray-100">(20 reviews)</p>
        </div>
        <p className="text-gray-600 text-sm leading-6 pb-6">
          Discover the flavors of Bar.Siada, offering a blend of local cuisine
          and a cozy ambiance for an unforgettable dining experience.
        </p>
      </div>
    </div>
  );
};

export default SingleRestaurant;
