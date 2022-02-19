import React from "react";

import {
  SideNavTopic,
  ExploreTagList,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
} from "../commonImports/commonImports";

const ExplorePage = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <SideNavTopic topic="Explore" />
      <ExploreTagList />
      <FloatingButton />
    </div>
  );
};

export default ExplorePage;
