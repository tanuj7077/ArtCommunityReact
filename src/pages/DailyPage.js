import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";

const DailyPage = () => {
  return (
    <div className="Container">
      <TopNav />
      {/* <SideNav /> */}
      <SideNavHandler />
      <SideNavTopic topic="Daily" />
      <Alert />
    </div>
  );
};

export default DailyPage;
