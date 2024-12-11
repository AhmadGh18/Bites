import React from "react";
import SingleItem from "./SingleItem";

const AllItems = () => {
  return (
    <div className="bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:mx-10">
        {[1, 2, 3, 4, 5].map((item, index) => {
          return <SingleItem key={index} />;
        })}
      </div>
    </div>
  );
};

export default AllItems;
