import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";

const AccountSettingsPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNav />
      {/* <SideNav /> */}
      <SideNavHandler />
      <AccountSettings id={id} />
      <Alert />
    </div>
  );
};

export default AccountSettingsPage;
