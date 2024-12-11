import { useEffect, useState } from "react";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Navbar from "./components/NavBar";
import Banner from "./components/Banner";
import MainPage from "./components/MainPage";
import Explore from "./components/Explore";
import SingleRestaurantPage from "./components/SingleRestaurantPage";

import AllRestaurantsItems from "./components/AllRestaurantsItems";
import Welcome from "./components/Welcome";
import AddMap from "./components/RestaurantComponets/AddMap";
import AddRestaurantInfo from "./components/RestaurantComponets/AddRestaurantInfo";
import AddLogo from "./components/RestaurantComponets/AddLogo";
import Restaurant from "./components/RestaurantComponets/Restaurant";
import { useStateContext } from "./context/ContextProvider";
import ResturantDashboard from "./components/RestaurantComponets/ResturantDashboard";
import Qrgenerator from "./components/RestaurantComponets/Qrgenerator";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/singlePage" element={<SingleRestaurantPage />} />
        <Route path="/addmap" element={<AddMap />} />
        <Route path="/AllItems" element={<AllRestaurantsItems />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/addrestaurantInfo" element={<AddRestaurantInfo />} />
        <Route path="/addlogo" element={<AddLogo />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/dashboard" element={<ResturantDashboard />} />
        <Route path="/qrcode" element={<Qrgenerator />} />
      </Routes>
    </div>
  );
};

export default App;
