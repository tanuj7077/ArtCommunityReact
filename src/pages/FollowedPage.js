import React from "react";

import SideNavTopic from "../components/SideNavTopic";
import FollowedList from "../components/FollowedPage/FollowedList";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

const FollowedPage = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <SideNavTopic topic="Followed" />
      <FollowedList />
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default FollowedPage;
