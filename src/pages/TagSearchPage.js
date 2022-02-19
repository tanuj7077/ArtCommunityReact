import React from "react";
import { useParams } from "react-router-dom";

import {
  SideNavTopic,
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  TagSearchList,
} from "../commonImports/commonImports";

const TagSearchPage = () => {
  const { name } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <SideNavTopic topic={`Tag : ${name}`} />
      <TagSearchList name={name} />
      <FloatingButton />
    </div>
  );
};

export default TagSearchPage;
