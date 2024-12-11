import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import axiosClient from "../../axiosClient";
import { useNavigate } from "react-router-dom";

const AddLogo = () => {
  const [logo, setLogo] = useState(null);
  const { setRegistrationInfo, RegistrationInfo, User, setUser } =
    useStateContext();
  useEffect(() => {
    if (!User) {
      axiosClient.get("/user").then((res) => {
        console.log(res);
        setUser(res.data);
      });
    }
  });
  const handleLogoChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setLogo(URL.createObjectURL(file));
      setRegistrationInfo((prevData) => ({
        ...prevData,
        profile_picture: file,
      }));
    }
  };
  const handlesubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", RegistrationInfo.name);
    formData.append("city", RegistrationInfo.city);
    formData.append("phoneNumber", RegistrationInfo.phoneNumber);
    formData.append("longitude", RegistrationInfo.longitude);
    formData.append("latitude", RegistrationInfo.latitude);
    formData.append("Type", RegistrationInfo.Type);
    formData.append("profile_picture", RegistrationInfo.profile_picture);

    formData.append("user_id", User.id);
    console.log(RegistrationInfo);
    axiosClient
      .post("/createRestaurant", formData)
      .then((res) => {
        nav("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    setRegistrationInfo((prevData) => ({
      ...prevData,
      user_id: User && User.id,
    }));
  }, [User, setUser]);
  const nav = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg text-center">
        <h2 className="text-2xl font-bold font-body tracking-widest mb-4">
          Add Logo
        </h2>

        <input
          type="file"
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:bg-gray-200 file:text-gray-700 hover:file:bg-gray-300 mb-4"
          onChange={handleLogoChange}
        />

        {logo && (
          <div className="mt-4">
            <img
              src={logo}
              alt="Logo Preview"
              className="w-60 h-60 rounded-[50%] object-contain border border-gray-300 "
            />
          </div>
        )}

        <div className="flex justify-between mt-6">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md font-body shadow-md hover:bg-gray-400 transition-all duration-300"
            onClick={() => nav("/addmap")}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-primary text-white rounded-md font-body shadow-md hover:bg-primaryHover transition-all duration-300"
            onClick={handlesubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddLogo;
