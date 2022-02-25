import React from "react";
import { useParams } from "react-router-dom";

import {
  SideNavTopic,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  PostGrid,
} from "../commonImports/commonImports";

const TagSearchPage = () => {
  const { name } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <SideNavTopic topic={`Tag : ${name}`} />
      <div className="main tagSearchList">
        <PostGrid
          type={"tagSearch"}
          limit={8}
          fetchPostUrl={`${process.env.REACT_APP_BASE_URL}/tags/tag/${name}`}
          fetchPostCountUrl={`${process.env.REACT_APP_BASE_URL}/tags/totalPostsWithTag/${name}`}
          showDataOnHover={true}
        />
      </div>
      <FloatingButton />
    </div>
  );
};

export default TagSearchPage;
