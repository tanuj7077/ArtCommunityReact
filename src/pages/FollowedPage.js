import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import FollowedList from "../components/FollowedPage/FollowedList";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

const FollowedPage = () => {
  return (
    <div className="Container">
      {/* <TopNav /> */}
      <TopNavResponsive />
      {/* <SideNav /> */}
      <SideNavHandler />
      <SideNavTopic topic="Followed" />
      <FollowedList />
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default FollowedPage;
