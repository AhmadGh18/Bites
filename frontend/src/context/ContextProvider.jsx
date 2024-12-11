import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
  User: null,
  setUser: () => {},
  setToken: () => {},
  RegistrationInfo: null,
  setRegistrationInfo: () => {},
  token: null,
  restaurantInfo: null,
  setRestaurantInfo: () => {},
});
export const ContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  const [RegistrationInfo, setRegistrationInfo] = useState({
    name: "",
    city: "",
    phoneNumber: "",
    longitude: "",
    latitude: "",
    profile_picture: null,
    user_id: "",
    Type: "",
  });
  const [token, _setToken] = useState(localStorage.getItem("token"));
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  };

  return (
    <StateContext.Provider
      value={{
        User,
        token,
        setToken,
        RegistrationInfo,
        setRegistrationInfo,
        setUser,
        setRestaurantInfo,
        restaurantInfo,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
