import React, { useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import SearchComponentMobile from "./SearchComponentMobile";

const SideNavHandler = () => {
  const [deskTopMode, setDesktopMode] = useState(1);
  const sideNavModeChangeHandler = () => {
    if (window.innerWidth < 600 || window.innerHeight < 600) {
      setDesktopMode(0);
    } else {
      setDesktopMode(1);
    }
  };
  useEffect(() => {
    const event = window.addEventListener("resize", sideNavModeChangeHandler);
    return () => window.removeEventListener("resize", event);
  }, []);
  useEffect(() => {
    sideNavModeChangeHandler();
  }, []);

  return <>{deskTopMode ? <SearchComponent /> : <SearchComponentMobile />}</>;
};

export default SideNavHandler;
