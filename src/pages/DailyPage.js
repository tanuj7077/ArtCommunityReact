import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import Alert from "../components/Modals/Alert/Alert";
const DailyPage = () => {
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
      <SideNavTopic topic="Daily" />
      <Alert />
    </div>
  );
};

export default DailyPage;
