import React from "react";

import TopNav from "../components/TopNav";
import TopNavResponsive from "../components/Navigation/TopNav";
import SideNav from "../components/Navigation/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import FloatingButton from "../components/Navigation/FloatingButton";

const DailyPage = () => {
  return (
    <div className="Container">
      {/* <TopNav /> */}
      {/* <SideNav /> */}
      <TopNavResponsive />
      <SideNavHandler />
      <SideNavTopic topic="Daily" />
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default DailyPage;
