import React from "react";
import img from "../assets/imageslog.png";
import { FaBookmark, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const SingleRestaurant = () => {
  return (
    <div className="md:h-[80vh] h-[60vh] bg-cards shadow-md rounded-lg mt-5 overflow-hidden font-body transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
      {/* Image section */}
      <div className="h-[60%] relative">
        <img
          src={img}
          alt="Restaurant"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-3 right-5">
          <div className="p-2 rounded-full shadow-md transition duration-300 bg-white hover:bg-primaryHover">
            <FaBookmark className="text-primary hover:text-white text-xl" />
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="p-4 text-textColor space-y-2 h-[40%] bg-white pb-6">
        {/* Restaurant title */}
        <h2 className="text-2xl font-semibold text-textColor">Bar . Siada</h2>
        <p className="text-sm text-secondaryText">Restaurant Name</p>

        {/* Location */}
        <div className="flex items-center gap-2 text-textColor">
          <FaMapMarkerAlt className="text-primary" />
          <p className="text-sm">Siaida near Abou Ali</p>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-2">
          <div className="flex text-ratings text-lg">
            {[1, 2, 3, 4].map((el) => (
              <FaStar key={el} />
            ))}
            <FaStar className="text-gray-300" />
          </div>
          <p className="text-sm text-secondaryText">(20 reviews)</p>
        </div>

        <hr className="border-borderGray my-2" />

        {/* Description */}
        <p className="text-secondaryText text-sm leading-6 hidden md:block">
          Discover the flavors of Bar.Siada, offering a blend of local cuisine
          and a cozy ambiance for an unforgettable dining experience.
        </p>
      </div>
    </div>
  );
};

export default SingleRestaurant;
