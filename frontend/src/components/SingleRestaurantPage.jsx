import React, { useState } from "react";
import {
  FaArrowDown,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaStar,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "./NavBar";
import SingleItem from "./SingleItem";
import AllItems from "./AllItems";
import MapComponent from "./MapComponent";
import { AnimatePresence, motion } from "framer-motion";

const SingleRestaurantPage = () => {
  const [isclicked, setisclicked] = useState(false);
  function handleclick() {
    setisclicked(!isclicked);
  }
  return (
    <div>
      <Navbar />
      <div className="relative flex md:flex-col  capitalize w-full min-w-0 mb-6 break-words border font-body border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30 draggable">
        <div className="px-9 pt-9 flex-auto min-h-[70px] pb-0 bg-transparent ">
          <div className="flex flex-wrap mb-6 xl:flex-nowrap  justify-center md:justify-start">
            <div className="mb-5 mr-5">
              <div className="relative inline-block shrink-0 rounded-2xl">
                <img
                  className="inline-block shrink-0 rounded-2xl w-[150px] h-[150px] lg:w-[160px] lg:h-[160px]"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                  alt="image"
                />
              </div>
            </div>
            <div className="grow">
              <div className="flex flex-wrap items-start justify-between  mb-2 mt-1 ">
                <div className="flex flex-col">
                  <div className="flex items-center mb-2 justify-center md:justify-start">
                    <a
                      className="text-secondary-inverse hover:text-primary transition-colors duration-200 ease-in-out font-semibold text-[1.5rem] mr-1"
                      href="javascript:void(0)"
                    >
                      {" "}
                      Alec Jhonson{" "}
                    </a>
                  </div>

                  <div className="flex md:hidden flex-wrap mb-3 my-auto justify-center  md:w-auto w-full  md:items-center md:justify-center mt-3 md:my-auto">
                    <a
                      href="javascript:void(0)"
                      className="inline-block px-6 bg-gray-200  py-3 mr-3 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark "
                    >
                      Follow{" "}
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="inline-block px-6 py-3 text-base font-medium leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark "
                    >
                      Hire
                    </a>
                  </div>

                  <div className="flex flex-wrap pr-2 mb-1 font-medium justify-center md:justify-start md:leading-relaxed leading-9">
                    <a className="flex items-center  mr-5 text-secondary-dark hover:text-primary">
                      <div className="flex justify-center items-center gap-3 text-gray-800">
                        <FaMapMarkerAlt />
                        New York, NY
                      </div>
                    </a>
                    <a
                      className="flex items-center  mr-5 text-secondary-dark hover:text-primary"
                      href="javascript:void(0)"
                    >
                      <div className="flex justify-center items-center gap-3 text-gray-800">
                        <FaEnvelope className="" />
                        contact@example.com{" "}
                      </div>
                    </a>
                  </div>
                  <div>
                    <div className="flex mb-3 mt-1 gap-2 flex-row  justify-center items-center md:justify-start">
                      {[1, 2, 3, 4].map((el) => {
                        return (
                          <FaStar
                            key={el}
                            className="text-yellow-400  text-xl"
                          />
                        );
                      })}{" "}
                      <p className="text-sm"> (20 review)</p>
                    </div>
                  </div>
                  <div className="flex  gap-4 ml-1  justify-center items-center md:justify-start text-xl mt-3 md:mt-0">
                    <FaFacebook className="text-blue-600 cursor-pointer" />
                    <FaInstagram className="text-pink-700 cursor-pointer" />
                    <FaWhatsapp className="text-green-600 cursor-pointer" />
                  </div>
                </div>
                <div className="md:flex hidden  flex-wrap my-auto justify-center  md:w-auto w-full  md:items-center md:justify-center mt-3 md:my-auto">
                  <a
                    href="javascript:void(0)"
                    className="inline-block px-6 py-3 mr-3 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl text-muted bg-light border-light hover:bg-light-dark active:bg-light-dark focus:bg-light-dark "
                  >
                    {" "}
                    Follow{" "}
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="inline-block px-6 py-3 text-base font-medium leading-normal text-center text-white align-middle transition-colors duration-150 ease-in-out border-0 shadow-none cursor-pointer rounded-2xl bg-primary hover:bg-primary-dark active:bg-primary-dark focus:bg-primary-dark "
                  >
                    Hire
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center mt-4">
                  <a
                    href="javascript:void(0)"
                    className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    {" "}
                    2.5k Followers{" "}
                  </a>
                  <a
                    href="javascript:void(0)"
                    className="mr-3 mb-2 inline-flex items-center justify-center text-secondary-inverse rounded-full bg-neutral-100 hover:bg-neutral-200 transition-all duration-200 ease-in-out px-3 py-1 text-sm font-medium leading-normal"
                  >
                    {" "}
                    48 Deals{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="w-full h-px border-neutral-200" />
          <ul className="group flex flex-wrap items-stretch justify-between md:justify-center text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid active-assignments">
            <li className="flex mt-2 -mb-[2px]">
              <a
                aria-controls="summary"
                className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-summary]:border-primary group-[.active-summary]:text-primary text-muted hover:border-primary"
                href="javascript:void(0)"
              >
                Items
              </a>
            </li>
            <li className="flex mt-2 -mb-[2px]">
              <a
                aria-controls="assignments"
                className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-assignments]:border-primary group-[.active-assignments]:text-primary text-muted hover:border-primary"
                href="javascript:void(0)"
              >
                offers
              </a>
            </li>

            <li className="flex mt-2 -mb-[2px] group">
              <a
                aria-controls="history"
                className="py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-[.active-history]:border-primary group-[.active-history]:text-primary text-muted hover:border-primary"
                href="javascript:void(0)"
              >
                gallery
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center p-3">
        <button
          onClick={handleclick}
          className="flex justify-center items-center bg-primary text-white p-2 rounded-md "
        >
          Location
          <FaArrowDown />
        </button>
      </div>

      <AnimatePresence>
        {isclicked && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "50vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <MapComponent />
          </motion.div>
        )}
      </AnimatePresence>
      <AllItems />
    </div>
  );
};

export default SingleRestaurantPage;
