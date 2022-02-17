import React from "react";
import { useParams } from "react-router-dom";

import AccountSettingsHandler from "../components/AccountSettings/AccountSettingsHandler";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

const AccountSettingsPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <AccountSettingsHandler id={id} />
      <FloatingButton />
    </div>
  );
};

export default AccountSettingsPage;
