import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import AppHelper from "./AppHelper";

export const UserStatusContext = createContext();

const AppContainer = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.post(
          `${AppHelper.getServerUrl()}/account/checkWhetherUserLoggedIn`,
          {},
          {
            credentials: "include",
            headers: {
              "Access-Token": localStorage.getItem("access-token"),
            },
          }
        );
        console.log("response.data:", response.data);
        if (response.data.message === "success") {
          setIsLoggedIn(true);
          localStorage.setItem(
            "access-token",
            response.data.results.accessToken
          );
        }
      } catch (error) {
        console.error("Error checking login status:", error);
        setIsLoggedIn(false);
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
