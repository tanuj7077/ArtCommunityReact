import React from "react";

import {
  SideNavTopic,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  Explore,
  PostList,
} from "../commonImports/commonImports";

const Home = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <SideNavTopic topic="Home" />
      <Explore />
      <PostList />
      <FloatingButton />
    </div>
  );
};

export default Home;
