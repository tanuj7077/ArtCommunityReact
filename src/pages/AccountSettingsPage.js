import React from "react";
import { useParams } from "react-router-dom";

import {
  AccountSettingsMobile,
  AccountSettingsDesk,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
} from "../commonImports";

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
