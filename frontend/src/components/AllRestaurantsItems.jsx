import React, { useState } from "react";
import Navbar from "./NavBar";
import AllItems from "./AllItems";
import { FaSearch } from "react-icons/fa";
import SingleMenue from "../SingleMenue";

const AllItemsPage = () => {
  const [search, setSearch] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSearch = (e) => setSearch(e.target.value);
  const handlePriceChange = (e) => setSelectedPrice(e.target.value);
  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);

  return (
    <div className="bg-white min-h-screen font-body">
      <Navbar />
      <div className="max-w-7xl mx-auto md:p-6 p-0 ">
        {/* Search and Filter Container */}
        <div className="bg-gray-50 shadow-lg rounded-xl p-6 mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Find Your Item
          </h2>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="relative w-full md:w-1/2">
              <input
                value={search}
                onChange={handleSearch}
                placeholder="Search for items..."
                className="w-full h-12 px-5 pr-14 bg-white text-gray-700 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-200"
                type="text"
              />
              <button className="absolute top-0 right-0 h-full px-4 text-white bg-primary rounded-r-lg flex items-center justify-center">
                <FaSearch />
              </button>
            </div>

            {/* Price Filter */}
            <div className="w-full md:w-1/4">
              <select
                value={selectedPrice}
                onChange={handlePriceChange}
                className="w-full h-12 px-4 bg-white text-gray-700 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-200"
              >
                <option value="">Filter by Price</option>
                <option value="low">Low to High</option>
                <option value="high">High to Low</option>
                <option value="under50">Under $50</option>
                <option value="50plus">Above $50</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="w-full md:w-1/4">
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="w-full h-12 px-4 bg-white text-gray-700 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition duration-200"
              >
                <option value="">Filter by Category</option>
                <option value="electronics">Electronics</option>
                <option value="clothing">Clothing</option>
                <option value="furniture">Furniture</option>
                <option value="toys">Toys</option>
              </select>
            </div>
          </div>
        </div>

        {/* Items Display */}
      </div>
      <SingleMenue />
    </div>
  );
};

export default AllItemsPage;
