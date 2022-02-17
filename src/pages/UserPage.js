import React from "react";
import { useParams } from "react-router-dom";

import User from "../components/UserPage/User";
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
      <FloatingButton />
    </div>
  );
};

export default UserPage;
