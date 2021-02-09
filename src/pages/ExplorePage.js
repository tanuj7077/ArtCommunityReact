import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import ExploreTagList from "../components/ExploreTagList";
const ExplorePage = () => {
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
      <SideNavTopic topic="Explore" />
      <ExploreTagList />
    </div>
  );
};

export default ExplorePage;
