import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../../context";
import AccountSettingsDesk from "./AccountSettingsDesk";
import AccountSettingsMobile from "./AccountSettingsMobile";

const AccountSettingsHandler = ({ id }) => {
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

  return (
    <>
      {deskTopMode ? (
        <AccountSettingsDesk id={id} />
      ) : (
        <AccountSettingsMobile id={id} />
      )}
    </>
  );
};

export default AccountSettingsHandler;
