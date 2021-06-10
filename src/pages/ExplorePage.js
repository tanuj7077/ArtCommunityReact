import React, { Suspense } from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import ExploreTagList from "../components/ExploreTagList";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
//const ExploreTagList = React.lazy(() => import("../components/ExploreTagList"));

const ExplorePage = () => {
  return (
    <div className="Container">
      <TopNav />
      {/* <SideNav /> */}
      <SideNavHandler />
      <SideNavTopic topic="Explore" />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <ExploreTagList />
      </Suspense> */}
      <ExploreTagList />

      <Alert />
    </div>
  );
};

export default ExplorePage;
