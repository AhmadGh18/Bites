import React, { useEffect, useState } from "react";
import { FaStore, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../context/ContextProvider";

const Welcome = () => {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };
  useEffect(() => {
    setSelectedRole(selectedRole);
  }, [selectedRole]);
  const nav = useNavigate();
  const { setRegistrationInfo, RegistrationInfo } = useStateContext();

  return (
    <div className="bg-gray-300 flex-col  font-body min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row gap-6 text-gray-200 w-full max-w-2xl">
        {/* Business Owner Card */}
        <div
          className={`bg-primary bg-opacity-90 p-6 shadow-xl rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 flex flex-col items-center text-center ${
            selectedRole === "owner" ? "border-4 border-gray-900" : ""
          }`}
          onClick={() => handleRoleSelect("owner")}
        >
          <FaStore className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold">I am a Business Owner</h2>
          <p className="text-sm mt-2">
            Manage your listings, reach more customers, and grow your business.
          </p>
        </div>

        {/* User Card */}
        <div
          className={`bg-primary bg-opacity-90 p-6 shadow-xl rounded-xl cursor-pointer transform transition-all duration-300 hover:scale-105 flex flex-col items-center text-center ${
            selectedRole === "user" ? "border-4 border-gray-900" : ""
          }`}
          onClick={() => handleRoleSelect("user")}
        >
          <FaUser className="text-5xl mb-4" />
          <h2 className="text-2xl font-semibold">I am a User</h2>
          <p className="text-sm mt-2">
            Explore the best places and find the right services for you.
          </p>
        </div>
      </div>

      {/* Continue Button */}
      {selectedRole && (
        <div className="mt-6">
          <button
            className="bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            onClick={() => {
              setRegistrationInfo(selectedRole);
              if (selectedRole == "owner") {
                nav("/restaurant");
              } else if (selectedRole == "user") {
                nav("/user");
              }
            }}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
