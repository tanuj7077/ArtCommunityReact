import React from "react";

import {
  SideNavTopic,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  Popular,
} from "../commonImports/commonImports";

const PopularPage = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavTopic topic="Popular" />
      <SideNavDesktop />
      <SideNavMobile />
      <FloatingButton />
      <Popular />
    </div>
  );
};

export default PopularPage;
