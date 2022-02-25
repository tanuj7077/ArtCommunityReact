import React from "react";

import {
  SideNavTopic,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  Explore,
  PostGrid,
} from "../commonImports/commonImports";

const Home = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <SideNavTopic topic="Home" />
      <Explore />
      <div className="main">
        <div className="subHeading">Discover</div>
        <PostGrid
          type={"homePageList"}
          limit={8}
          fetchPostUrl={`${process.env.REACT_APP_BASE_URL}/posts/postList`}
          fetchPostCountUrl={`${process.env.REACT_APP_BASE_URL}/posts/totalPosts`}
          showDataOnHover={true}
        />
      </div>
      {/* <PostList /> */}
      <FloatingButton />
    </div>
  );
};

export default Home;
