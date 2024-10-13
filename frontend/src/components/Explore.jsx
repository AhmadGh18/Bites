import React from "react";
import Navbar from "./NavBar";
import SingleRestaurant from "./SingleRestaurant";
import AllRestaurant from "./AllRestaurant";
import { FaSearch } from "react-icons/fa";

const Explore = () => {
  return (
    <div>
      <Navbar />

      <AllRestaurant />
    </div>
  );
};

export default Explore;
