import React, { useState } from "react";
import SingleRestaurant from "./SingleRestaurant";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const AllRestaurant = () => {
  const [cityFilterOpen, setCityFilterOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);

  const cities = ["Beirut", "Sidon", "Tripoli", "Byblos"];

  const toggleCityFilter = () => {
    setCityFilterOpen(!cityFilterOpen);
  };

  const handleCityChange = (city) => {
    if (selectedCities.includes(city)) {
      setSelectedCities(selectedCities.filter((c) => c !== city));
    } else {
      setSelectedCities([...selectedCities, city]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen font-body">
      {/* Search and Filters */}
      <div className="w-full bg-white flex flex-col sm:flex-row justify-between items-center gap-4 p-4 shadow-md rounded-lg">
        {/* Search Input */}
        <div className="relative w-full sm:w-[45%] lg:w-[40%]">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="h-[45px] w-full pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-all"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
            <FaSearch />
          </div>
        </div>

        {/* Multi-select City Filter */}
        <div className="relative w-full sm:w-[30%] lg:w-[25%]">
          <div
            className="h-[45px] w-full bg-white border border-gray-300 rounded-lg flex items-center justify-between px-4 cursor-pointer"
            onClick={toggleCityFilter}
          >
            <span className="text-gray-600">
              {selectedCities.length > 0
                ? `Selected: ${selectedCities.join(", ")}`
                : "Filter by City"}
            </span>
            <FaChevronDown
              className={`transform transition-transform ${
                cityFilterOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
          {cityFilterOpen && (
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10 max-h-[200px] overflow-auto">
              {cities.map((city) => (
                <label
                  key={city}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedCities.includes(city)}
                    onChange={() => handleCityChange(city)}
                  />
                  <span>{city}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sort By Dropdown */}
        <div className="relative w-full sm:w-[30%] lg:w-[20%]">
          <select className="h-[45px] w-full rounded-lg border border-gray-300 focus:outline-none focus:border-primary transition-all">
            <option value="" disabled selected>
              Sort By
            </option>
            <option value="rating">Rating</option>
            <option value="reviews">Most Reviewed</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Results Count */}
        <div className="w-full sm:w-auto lg:w-auto text-center text-gray-600">
          <p>10 Results Found</p>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <SingleRestaurant key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurant;
