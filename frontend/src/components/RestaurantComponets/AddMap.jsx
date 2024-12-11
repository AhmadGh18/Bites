import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/ContextProvider";

const AddMap = () => {
  const [latitude, setLatitude] = useState(33.883346253230904);
  const [longitude, setLongitude] = useState(35.517484664916985);
  const [city, setCity] = useState("Beirut");
  const [loading, setLoading] = useState(false);
  const { User } = useStateContext();
  const { RegistrationInfo, setRegistrationInfo } = useStateContext();
  useEffect(() => {
    console.log(RegistrationInfo);
  }, []);
  const fetchLocationInfo = async (lat, lng) => {
    try {
      const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`;
      const response = await fetch(geoApiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch location information");
      }
      const data = await response.json();
      const city = data.city;

      setRegistrationInfo((prevData) => ({
        ...prevData,
        city: city,
      }));
    } catch (error) {
      console.error("Error fetching location information:", error);
    }
  };

  useEffect(() => {
    if (window.jQuery) {
      import(
        "https://rawgit.com/Logicify/jquery-locationpicker-plugin/master/dist/locationpicker.jquery.js"
      )
        .then(() => {
          const mapOptions = {
            location: {
              latitude,
              longitude,
            },
            radius: 0,
            enableAutocomplete: true,
            oninitialized: (component) => {
              component.map.setCenter(
                new google.maps.LatLng(latitude, longitude)
              );
              component.map.setZoom(15);
            },
            onchanged: (currentLocation) => {
              const { latitude, longitude } = currentLocation;
              setLatitude(latitude);
              setLongitude(longitude);

              setRegistrationInfo((prevData) => ({
                ...prevData,
                longitude: longitude,
                latitude: latitude,
                city: city,
              }));

              fetchLocationInfo(latitude, longitude);
            },
          };

          // Initialize location picker
          $("#us2").locationpicker(mapOptions);
        })
        .catch((error) => {
          console.error("Error loading locationpicker plugin:", error);
        });
    } else {
      console.error("jQuery is not available.");
    }
  }, []);

  const nav = useNavigate();
  function handleAcceptLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          setLatitude(latitude);
          setLongitude(longitude);
          console.log("long", longitude);
          console.log("lat", latitude);

          if ($("#us2").locationpicker) {
            $("#us2").locationpicker("location", {
              latitude,
              longitude,
            });
          }
          setRegistrationInfo((prevData) => ({
            ...prevData,
            longitude: longitude,
            city: city,
            latitude: latitude,
          }));
        },
        (error) => {
          console.error("Error getting location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }

  // useEffect(() => {
  //   handleAcceptLocation();
  // }, []);

  return (
    <div className="max-w-screen-lg mx-auto px-4">
      <h2 className="text-center mt-6 text-2xl font-body font-bold tracking-widest">
        Add Restaurant Location
      </h2>
      <div
        id="us2"
        className="h-[70vh] w-full m-auto mt-5 border-4 border-primary rounded-lg shadow-md"
      ></div>
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => {
            return nav("/addrestaurantInfo");
          }}
          className="px-4 py-2 bg-gray-300 md:flex justify-center items-center gap-1 text-gray-700 rounded-md font-body shadow-md hover:bg-gray-400 transition-all duration-300"
        >
          <FaArrowLeft />

          <span className="md:block hidden">Back</span>
        </button>
        <div className="flex gap-3">
          <button
            className="md:px-4 px-2 md:py-2 py-1 bg-primary text-white rounded-md font-body shadow-md hover:bg-primaryHover transition-all duration-300"
            onClick={handleAcceptLocation}
          >
            Access my location
          </button>
          <Link
            to="/addlogo"
            className="px-4 py-2 bg-primary text-white rounded-md font-body shadow-md hover:bg-primaryHover transition-all duration-300"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddMap;
