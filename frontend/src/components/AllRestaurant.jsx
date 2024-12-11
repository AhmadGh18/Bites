import React, { useState } from "react";
import Select from "react-select";
import SingleRestaurant from "./SingleRestaurant";
import { FaSearch, FaChevronDown } from "react-icons/fa";

const AllRestaurant = () => {
  const [cityFilterOpen, setCityFilterOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);
  const [sortBy, setSortBy] = useState(null);

  const cities = ["Beirut", "Sidon", "Tripoli", "Byblos", "Barja", "Jyeh"];

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

  const handleSortChange = (selectedOption) => {
    setSortBy(selectedOption);
  };

  const sortOptions = [
    { value: "rating", label: "Rating" },
    { value: "reviews", label: "Most Reviewed" },
    { value: "newest", label: "Newest" },
  ];

  return (
    <div className="md:p-8 p-4 bg-gray-50 min-h-screen font-body">
      {/* Search and Filters */}
      <div className="w-full bg-white flex flex-col sm:flex-row justify-between items-center gap-4 p-5 shadow-md rounded-xl">
        {/* Search Input */}
        <div className="relative w-full sm:w-[40%] lg:w-[35%]">
          <input
            type="text"
            placeholder="Search for restaurants..."
            className="h-[45px] w-full pl-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-primary focus:border-primary transition-all"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
            <FaSearch />
          </div>
        </div>

        {/* Multi-select City Filter */}
        <div className="relative w-full sm:w-[30%] lg:w-[25%]">
          <div
            className="h-[45px] w-full bg-white border border-gray-300 rounded-lg flex items-center justify-between px-4 cursor-pointer transition-all hover:border-primary"
            onClick={toggleCityFilter}
          >
            <span className="text-gray-600 truncate">
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
            <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-lg mt-1 z-10 max-h-[200px] overflow-auto shadow-lg">
              {cities.map((city) => (
                <label
                  key={city}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="form-checkbox text-primary focus:ring-primary"
                    checked={selectedCities.includes(city)}
                    onChange={() => handleCityChange(city)}
                  />
                  <span className="text-gray-700">{city}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="relative w-full sm:w-[30%] lg:w-[20%]">
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={handleSortChange}
            placeholder="Sort By"
            classNamePrefix="react-select"
            className="h-[45px] w-full rounded-lg"
          />
        </div>

        {/* Results Count */}
        <div className="w-full sm:w-auto lg:w-auto text-center text-gray-600">
          <p>10 Results Found</p>
        </div>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 p-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <SingleRestaurant key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllRestaurant;
