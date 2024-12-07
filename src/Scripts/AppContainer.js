import React, { createContext, useState, useEffect } from "react";
import apiCaller from "./ApiCaller";

export const UserStatusContext = createContext();

const AppContainer = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
      } finally {
      }
    };

    checkLoginStatus();
  }, []);

  return (
    <UserStatusContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      {children}
    </UserStatusContext.Provider>
  );
};

export default AppContainer;
