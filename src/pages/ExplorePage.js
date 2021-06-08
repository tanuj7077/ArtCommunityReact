import React, { Suspense } from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import ExploreTagList from "../components/ExploreTagList";
import Alert from "../components/Modals/Alert/Alert";
//const ExploreTagList = React.lazy(() => import("../components/ExploreTagList"));

const ExplorePage = () => {
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
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
