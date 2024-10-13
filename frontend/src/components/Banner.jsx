import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import img from "../assets/pngwing.com (1).png";
import { Link } from "react-router-dom";

const Banner = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const textAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  useEffect(() => {
    controls.start("visible");
  }, [controls]);
  const [isVisible, setIsVisible] = useState(false); // State to control visibility
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <div className="relative overflow-hidden font-body">
      <div className="h-[90vh] flex flex-col md:flex-row bg-gray-50 md:mt-0">
        {/* Text Section */}
        <div
          className={`w-full md:w-1/2 h-full flex flex-col justify-center items-center p-6 ${
            isSmallScreen ? "text-center" : "text-left"
          }`}
        >
          <div className="gap-3 flex flex-col items-center md:items-start md:mt-10 md:ml-5">
            <p className="text-primary font-bold text-lg uppercase">
              Your Ultimate Restaurant Guide
            </p>

            <motion.h1
              className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-800"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"} // Control animation based on isVisible
              variants={textAnimation}
              transition={{ duration: 0.6, ease: "easeOut" }} // Adjust duration as needed
            >
              Discover the Flavors of{" "}
              <span className="text-primary">Lebanon</span>
            </motion.h1>
            <p className="text-md text-gray-700 mt-2">
              Explore a curated selection of dishes and dining experiences
              tailored just for you.
            </p>
            <Link
              to="/explore"
              className="w-fit p-3 bg-primary text-white rounded-md shadow-lg hover:bg-orange-400 transition duration-300 ease-in-out mt-4"
            >
              Start Exploring
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div
          className="w-full md:w-2/3 h-1/4 md:h-full bg-primary relative flex justify-center items-center"
          style={{
            clipPath: isSmallScreen
              ? "ellipse(100% 100% at 50% 100%)"
              : "ellipse(100% 100% at 100% 40%)",
          }}
        >
          {/* Motion component for animating the image */}
          <motion.img
            src={img}
            className="md:ml-[100px] md:mb-20 hidden md:block max-w-full rounded-lg"
            alt="Delicious Lebanese dish"
            initial={{ opacity: 0, scale: 0.8 }} // Start with hidden and scaled down
            animate={{ opacity: 1, scale: 1 }} // Fade in and scale up
            transition={{ duration: 0.8, ease: "easeOut" }} // Adjust the duration for the fade-in effect
            onAnimationComplete={() => {
              // After the initial fade-in is complete, start the rocking motion
              controls.start({
                x: [0, -10, 10, -5, 5, 0], // Moves back and forth
                rotateY: [0, 10, -10, 5, -5, 0], // Adds a slight 3D rotation effect
                transition: {
                  duration: 2, // Time for the rocking animation
                  ease: "easeInOut",
                  repeat: 1, // Repeat the motion once for a smooth effect
                },
              });
            }}
          />
        </div>
      </div>

      {/* Optional: Background Image for More Depth */}
    </div>
  );
};

export default Banner;
