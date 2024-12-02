import React, { useState, useEffect, useCallback } from "react";
import "./LoadingMask.css";

const LoadingMask = () => {
  const [toShow, setToShow] = useState(false);

  const showMask = useCallback((config = {}) => {
    setToShow(true);
  }, []);

  const hideMask = useCallback(() => {
    if (toShow) {
      setToShow(false);
    }
  }, [toShow]);

  useEffect(() => {
    window.addEventListener("loadmask:show", showMask);
    window.addEventListener("loadmask:hide", hideMask);

    return () => {
      window.removeEventListener("loadmask:show", showMask);
      window.removeEventListener("loadmask:hide", hideMask);
    };
  }, [showMask, hideMask]);

  return (
    <div className={`loading-mask-overlay ${toShow ? "show" : "hide"}`}>
      <img src={"/logo_run.png"} alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default LoadingMask;
