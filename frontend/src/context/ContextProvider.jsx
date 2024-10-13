import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({
  User: null,
  setUser: () => {},
  setToken: () => {},

  token: null,
});
export const ContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);

  const [token, _setToken] = useState(localStorage.getItem("token"));

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

        setUser,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
