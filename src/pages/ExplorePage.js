import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
const ExplorePage = () => {
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
      <SideNavTopic />
    </div>
  );
};

export default ExplorePage;
