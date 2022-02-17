import React from "react";

import SideNavTopic from "../components/SideNavTopic";
import ExploreTagList from "../components/ExplorePage/ExploreTagList";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";
//const ExploreTagList = React.lazy(() => import("../components/ExploreTagList"));

const ExplorePage = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <SideNavTopic topic="Explore" />
      <ExploreTagList />
      <FloatingButton />
    </div>
  );
};

export default ExplorePage;
