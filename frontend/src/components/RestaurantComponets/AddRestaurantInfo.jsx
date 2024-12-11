import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useStateContext } from "../../context/ContextProvider";

const AddRestaurantInfo = () => {
  const [showForm, setShowForm] = useState(false);
  const sortOptions = [
    { value: "bar", label: "bar/بار" },
    { value: "restaurant", label: "restaurant/مطعم" },
    { value: "bakery", label: "bakery/فرن" },
  ];
  const { RegistrationInfo, setRegistrationInfo } = useStateContext();
  const { User } = useStateContext();
  console.log(User);

  const nav = useNavigate();
  if (!User) {
    nav("/");
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistrationInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 100); // Adjust the delay as needed
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div
        className={`bg-gray-50  font-body transition-opacity duration-1000 ${
          showForm ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div className="max-w-md w-full shadow-lg  shadow-gray-300 ">
            <div className="p-4 md:p-8 rounded-2xl bg-white shadow relative">
              <h2 className="text-gray-800 text-center text-2xl font-bold m-6 md:m-0">
                Add these Info
              </h2>

              <form className="mt-10 space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="font-semibold text-sm mb-2 block"
                  >
                    Restaurant Name
                  </label>
                  <div className="relative flex items-center">
                    <input
                      required
                      aria-required="true"
                      className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      placeholder="Type here..."
                      value={RegistrationInfo.name ? RegistrationInfo.name : ""}
                      id="name"
                      name="name"
                      type="text"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="font-semibold text-sm mb-2 block"
                  >
                    Restaurant number
                  </label>
                  <div className="relative flex items-center">
                    <input
                      id="password"
                      name="phoneNumber"
                      required
                      aria-required="true"
                      onChange={handleChange}
                      className="w-full text-gray-800 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
                      placeholder="7192..."
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-4 h-4 absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                      aria-hidden="true"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="relative w-full ">
                  <label className="font-semibold text-sm mb-2 block">
                    Category
                  </label>
                  <Select
                    options={sortOptions}
                    placeholder="Ex restaurant"
                    classNamePrefix="react-select"
                    className="h-[50px] w-full rounded-lg"
                    name="Type"
                    onChange={(selectedOption) =>
                      setRegistrationInfo((prevData) => ({
                        ...prevData,
                        Type: selectedOption ? selectedOption.value : "",
                      }))
                    }
                    value={sortOptions.find(
                      (option) => option.value === RegistrationInfo.Type
                    )}
                  />
                </div>

                <div className="flex justify-end">
                  <Link
                    to="/addmap"
                    className="bg-primary text-white p-3 flex items-center justify-center gap-4 rounded-md transition-opacity duration-300 ease-in-out hover:opacity-80"
                  >
                    Contunue
                    <FaArrowRight />
                  </Link>
                </div>
              </form>
              <div
                className="absolute bottom-0 left-0 h-16 w-20 bg-primary flex items-center justify-center"
                style={{
                  clipPath: "ellipse(100% 100% at 0% 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurantInfo;
