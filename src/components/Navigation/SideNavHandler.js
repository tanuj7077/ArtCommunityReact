import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import SideNavMobile from "./SideNavMobile";
import SideNavDesktop from "./SideNavDesktop";

const SideNavHandler = () => {
  const [deskTopMode, setDesktopMode] = useState(1);
  const sideNavModeChangeHandler = () => {
    if (window.innerWidth < 600) {
      setDesktopMode(0);
    } else {
      setDesktopMode(1);
    }
  };
  useEffect(() => {
    const event = window.addEventListener("resize", sideNavModeChangeHandler);
    return () => window.removeEventListener("resize", event);
  }, []);

  return <>{deskTopMode ? <SideNavDesktop /> : <SideNavMobile />}</>;
};

export default SideNavHandler;
