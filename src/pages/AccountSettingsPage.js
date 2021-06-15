import React from "react";
import { useParams } from "react-router-dom";

import AccountSettingsHandler from "../components/AccountSettings/AccountSettingsHandler";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";
import { useGlobalContext } from "../context";

const AccountSettingsPage = () => {
  const { loading } = useGlobalContext();
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <AccountSettingsHandler id={id} />
      <Alert />
      <FloatingButton />
      {loading && (
        <div className="loadingAnimation">
          <div className="modalLoading"></div>
          <div className="modalLoadingText">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default AccountSettingsPage;
