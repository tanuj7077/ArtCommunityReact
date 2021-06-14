import React from "react";

import SideNavTopic from "../components/SideNavTopic";
import ExploreTagList from "../components/ExplorePage/ExploreTagList";
import Alert from "../components/Modals/Alert/Alert";
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
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default ExplorePage;
