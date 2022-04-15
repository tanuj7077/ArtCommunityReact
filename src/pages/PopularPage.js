import React from "react";

import {
  SideNavTopic,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
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
      <div className="main">
        <PostGrid
          type={"popular"}
          limit={12}
          fetchPostUrl={`${process.env.REACT_APP_BASE_URL}/posts/getPopular`}
          fetchPostCountUrl={`${process.env.REACT_APP_BASE_URL}/posts/totalPosts`}
          showDataOnHover={true}
        />
      </div>
    </div>
  );
};

export default PopularPage;
