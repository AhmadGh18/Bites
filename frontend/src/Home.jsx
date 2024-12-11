import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // For handling URL
import { useStateContext } from "./context/ContextProvider";
import axiosClient from "./axiosClient";

const Home = () => {
  const { token, setToken, User, setUser } = useStateContext();
  const location = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      setToken(token);

      console.log("Token saved:", token);
    }
  }, [location]);

  useEffect(() => {
    axiosClient
      .get("/user")
      .then((response) => {
        setUser(response.data);
        if (response.data.has_restaurant) {
          nav("/addrestaurantInfo");
        } else {
          nav("/users");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [setUser]);
};

export default Home;
