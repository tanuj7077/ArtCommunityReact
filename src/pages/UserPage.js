import React from "react";
import { useParams } from "react-router-dom";

import User from "../components/UserPage/User";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

const UserPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <User id={id} />
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default UserPage;
