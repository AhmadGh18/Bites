import React, { useEffect, useState } from "react";
import { useStateContext } from "../../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../axiosClient";
import Restaurant from "./Restaurant";
import Sidebar from "../UserComponents/SideBar";
const ResturantDashboard = () => {
  const { restaurantInfo, setRestaurantInfo, User, setUser } =
    useStateContext();
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!User) {
      setLoading(true);
      axiosClient
        .get("/user")
        .then((res) => {
          console.log("User data:", res);
          setUser(res.data);
        })
        .catch((err) => console.error("Error fetching user:", err));
    } else if (User.id) {
      setLoading(true);
      axiosClient
        .get(`/restaurant/${User.id}`)
        .then((res) => {
          console.log("Restaurant data:", res);
          setRestaurantInfo(res.data.restaurant);
          setLoading(false);
        })
        .catch((err) => console.error("Error fetching restaurant info:", err));
    }
  }, [User, setUser, setRestaurantInfo]);

  useEffect(() => {
    if (!User && !Restaurant) {
      nav("/login");
    }
  }, [User, nav]);

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default ResturantDashboard;
