import React from "react";
import { useParams } from "react-router-dom";

import {
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  User,
} from "../commonImports/commonImports";

const UserPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <User username={id} />
      <FloatingButton />
    </div>
  );
};

export default UserPage;
