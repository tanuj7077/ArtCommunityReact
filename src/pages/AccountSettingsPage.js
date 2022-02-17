import React from "react";
import { useParams } from "react-router-dom";

import AccountSettingsHandler from "../components/AccountSettings/AccountSettingsHandler";
import SideNavDesktop from "../components/Navigation/SideNavDesktop";
import SideNavMobile from "../components/Navigation/SideNavMobile";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

const AccountSettingsPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <AccountSettingsHandler id={id} />
      <FloatingButton />
    </div>
  );
};

export default AccountSettingsPage;
