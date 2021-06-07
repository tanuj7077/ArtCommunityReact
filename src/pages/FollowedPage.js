import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import FollowedList from "../components/FollowedPage/FollowedList";
import Alert from "../components/Modals/Alert/Alert";

const FollowedPage = () => {
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
      <SideNavTopic topic="Followed" />
      <FollowedList />
      <Alert />
    </div>
  );
};

export default FollowedPage;
