import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // For handling URL
import { useStateContext } from "./context/ContextProvider";

const Home = () => {
  const { token, setToken } = useStateContext();
  const location = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    // Extract the token from the URL
    const params = new URLSearchParams(location.search);
    const token = params.get("token");

    if (token) {
      setToken(token);

      console.log("Token saved:", token);
      return nav("/dashboard");
    }
  }, [location]);

  return <div>Home</div>;
};

export default Home;
