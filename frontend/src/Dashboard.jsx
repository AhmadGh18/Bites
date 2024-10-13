import React, { useEffect, useState } from "react";
import axiosClient from "./axiosClient";
import { useStateContext } from "./context/ContextProvider";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { User, setUser } = useStateContext();
  const [name, setName] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    axiosClient
      .get("/user")
      .then((response) => {
        console.log("Response data:", response.data); // Log response data
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setIsLoading(false); // Stop loading in case of an error
      });
  }, [setUser]);

  return <div>{User && User.name ? User.name : "no"}</div>;
};

export default Dashboard;
