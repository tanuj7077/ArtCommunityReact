import React from "react";
import { useParams } from "react-router-dom";

import User from "../components/UserPage/User";
import SideNavDesktop from "../components/Navigation/SideNavDesktop";
import SideNavMobile from "../components/Navigation/SideNavMobile";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

const UserPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <User id={id} />
      <FloatingButton />
    </div>
  );
};

export default UserPage;
