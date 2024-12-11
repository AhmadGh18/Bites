import React, { useEffect } from "react";
import Banner from "./Banner";
import Navbar from "./NavBar";
import { useStateContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axiosClient";

const MainPage = () => {
  const nav = useNavigate();

  const { User, setUser } = useStateContext();

  useEffect(() => {
    if (!User) {
      axiosClient
        .get("/user")
        .then((response) => {
          setUser(response.data);
          if (response.data.has_restaurant) {
            nav("/dashboard");
          } else {
            nav("/users");
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [setUser]);

  return (
    <div>
      <Navbar />
      <Banner />
    </div>
  );
};

export default MainPage;
