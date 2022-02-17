import React from "react";

import SideNavTopic from "../components/SideNavTopic";
import FollowedList from "../components/FollowedPage/FollowedList";
import SideNavDesktop from "../components/Navigation/SideNavDesktop";
import SideNavMobile from "../components/Navigation/SideNavMobile";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

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
