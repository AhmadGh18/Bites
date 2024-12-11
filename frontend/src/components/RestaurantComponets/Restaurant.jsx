import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";

const Restaurant = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    has_restaurant: 1,
  });
  const [errorMessage, setErrorMessage] = useState(null); // Change to single message
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const nav = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    axiosClient
      .post("/register", formData)
      .then((res) => {
        setSuccessMessage(res.data.message);
        setErrorMessage(null);
        nav("/addrestaurantInfo");
      })
      .catch((err) => {
        const response = err.response.data;
        if (response.errors) {
          const errors = Object.values(response.errors).flat().join(", ");
          setErrorMessage(errors);
        } else {
          setErrorMessage(response.message);
        }
      });
  };

  return (
    <div>
      <div className="bg-gray-50 font-body transition-opacity duration-100 ">
        <div className="min-h-screen flex flex-col items-center justify-center md:py-6 px-4 py-2">
          <div className="max-w-md w-full">
            <div className="p-4 md:p-8 rounded-2xl bg-white shadow">
              <h2 className="text-gray-800 text-center text-2xl font-bold m-6 md:m-0">
                Create Account
              </h2>
              {successMessage && (
                <div className="mt-2 p-4 bg-green-100 text-green-800 border border-green-300 rounded">
                  <p>{successMessage}</p>
                </div>
              )}
              {/* Show errorMessage only when it's not null */}
              {errorMessage && (
                <div className="mt-2 p-4 bg-red-100 text-red-800 border border-red-300 rounded">
                  <p>{errorMessage}</p>
                </div>
              )}
              <div className="mt-1 space-y-4">
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center justify-center gap-3 md:mt-8">
                    <div>
                      <label
                        htmlFor="first_name"
                        className="font-semibold text-sm mb-2 block"
                      >
                        First Name
                      </label>
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        required
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                        placeholder="John"
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="last_name"
                        className="font-semibold text-sm mb-2 block"
                      >
                        Last Name
                      </label>
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        required
                        className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                        placeholder="Doe"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="font-semibold text-sm mb-2 block mt-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                      placeholder="Enter Email"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="font-semibold text-sm mb-2 block mt-2"
                    >
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        id="password"
                        name="password"
                        type={isPasswordVisible ? "text" : "password"}
                        required
                        className="w-full text-gray-800 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                        placeholder="Enter password"
                        onChange={handleChange}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        className="w-4 h-4 absolute right-4 cursor-pointer"
                        viewBox="0 0 128 128"
                        aria-hidden="true"
                        onClick={togglePasswordVisibility}
                      >
                        {/* Add the eye icon SVG path here */}
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="password_confirmation"
                      className="font-semibold text-sm mb-2 block mt-2"
                    >
                      Password Confirmation
                    </label>
                    <div className="relative flex items-center">
                      <input
                        id="password_confirmation"
                        name="password_confirmation"
                        type={isPasswordVisible ? "text" : "password"}
                        required
                        className="w-full text-gray-800 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-800"
                        placeholder="Confirm password"
                        onChange={handleChange}
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#bbb"
                        className="w-4 h-4 absolute right-4 cursor-pointer"
                        viewBox="0 0 128 128"
                        aria-hidden="true"
                        onClick={togglePasswordVisibility}
                      >
                        {/* Add the eye icon SVG path here */}
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 text-sm text-gray-800"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full py-3 text-sm font-medium tracking-wide text-white bg-primary rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-1 focus:ring-black transition-all duration-300"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <div className="mt-8">
                  <button
                    type="button"
                    className="relative flex items-center justify-center mt-3 w-full py-3 text-sm font-medium tracking-wide bg-white rounded-lg hover:bg-gray-200 text-black outline-none ring-1 ring-orange-500 transition-all duration-300"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      className="absolute left-3 w-6"
                      alt="Google logo"
                    />
                    <a
                      href="http://localhost:8000/auth/google/redirect?role=owner"
                      className="ml-8"
                    >
                      Continue with Google
                    </a>
                  </button>
                </div>

                <p className="text-gray-800 text-sm mt-8 text-center">
                  Don't have an account?
                  <Link
                    to="/login"
                    className="text-blue-600 hover:underline ml-1 font-semibold"
                  >
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
