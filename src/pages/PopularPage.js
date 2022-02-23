import React from "react";

import {
  SideNavTopic,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  Popular,
  PostGrid,
} from "../commonImports/commonImports";

const PopularPage = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavTopic topic="Popular" />
      <SideNavDesktop />
      <SideNavMobile />
      <FloatingButton />
      {/* <Popular /> */}
      <PostGrid
        limit={8}
        fetchPostUrl={`${process.env.REACT_APP_BASE_URL}/posts/getPopular`}
        fetchPostCountUrl={`${process.env.REACT_APP_BASE_URL}/posts/totalPosts`}
        showDataOnHover={true}
      />
    </div>
  );
};

export default PopularPage;
