import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/a_simple_white_and_orange_logo_for_a_restaurant_finder_website_called_bites-removebg-preview.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className="bg-white font-body text-black shadow-lg w-full z-50 transition duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to="/" aria-label="Home">
          <div className="font-bold flex items-center">
            <img src={logo} className="h-16" alt="Logo" />
            <p className="text-2xl text-primary ml-[-10px] mt-2">Bites</p>
          </div>
        </Link>
        <div className="hidden md:flex space-x-6 text-lg items-center">
          {["Home", "About", "Services", "Contact", "Discover"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="hover:text-orange-500 transition duration-200"
            >
              {item}
            </Link>
          ))}
          <Link
            to="/login"
            className="bg-primary px-4 py-2 rounded-md text-gray-50"
          >
            Login
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-white bg-opacity-95 flex flex-col items-center justify-center z-40 p-6 space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 focus:outline-none"
            aria-label="Close Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="flex flex-col space-y-6 text-lg text-gray-800 font-semibold text-center">
            {["Home", "About", "Services", "Contact", "Discover"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-orange-500 transition duration-200"
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              )
            )}
            <Link
              to="/map"
              className="hover:text-orange-500 transition duration-200"
              onClick={toggleMenu}
            >
              Map
            </Link>
            <Link
              to="/login"
              className="bg-primary px-6 py-3 rounded-md text-gray-50"
            >
              Login
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
