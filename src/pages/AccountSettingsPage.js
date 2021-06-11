import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

const AccountSettingsPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      {/* <TopNav /> */}
      <TopNavResponsive />
      {/* <SideNav /> */}
      <SideNavHandler />
      <AccountSettings id={id} />
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default AccountSettingsPage;
