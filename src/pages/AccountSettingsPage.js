import React from "react";
import { useParams } from "react-router-dom";

import AccountSettingsMobile from "../components/AccountSettings/AccountSettingsMobile";
import AccountSettingsDesk from "../components/AccountSettings/AccountSettingsDesk";
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
      <AccountSettingsMobile id={id} />
      <AccountSettingsDesk id={id} />
      <FloatingButton />
    </div>
  );
};

export default AccountSettingsPage;
