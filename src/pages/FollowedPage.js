import React from "react";

import {
  SideNavTopic,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  FollowedList,
} from "../commonImports";

const FollowedPage = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <SideNavTopic topic="Followed" />
      <FollowedList />
      <FloatingButton />
    </div>
  );
};

export default FollowedPage;
