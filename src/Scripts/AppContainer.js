import React, { createContext, useState, useEffect } from "react";
import apiCaller from "./ApiCaller";
import User from "./User";
import { useLocation } from "react-router-dom";

export const UserStatusContext = createContext();

const AppContainer = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const pagesToCheckLogin = [
    "/myprofile",
    "/myorders",
    "/ordersummary",
    "/mywishlist",
  ];

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await apiCaller(
          "post",
          "/account/checkWhetherUserLoggedIn"
        );
        if (response.message === "success") {
          setIsLoggedIn(true);
          localStorage.setItem("access-token", response.results.accessToken);
          User.setUserName(response.results.customerName);
        } else {
          setIsLoggedIn(false);
        }
      } catch (error) {
        setIsLoggedIn(false);
      }
    };
    if (pagesToCheckLogin.includes(location.pathname)) {
      checkLoginStatus();
    }
  }, [location.pathname]);

  return (
    <UserStatusContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </UserStatusContext.Provider>
  );
};

export default AppContainer;
