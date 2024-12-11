import React, { useEffect, useState } from "react";
import axiosClient from "./axiosClient";
import { useStateContext } from "./context/ContextProvider";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { User, setUser } = useStateContext();
  const [name, setName] = useState(null);

  return <div>{User && User.name ? User.name : "Loading..."}</div>;
};

export default Dashboard;
