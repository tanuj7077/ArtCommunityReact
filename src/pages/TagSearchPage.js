import React from "react";
import { useParams } from "react-router-dom";

import SideNavTopic from "../components/SideNavTopic";
import TagSearchList from "../components/TagSearchPage/TagSearchList";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";
const TagSearchPage = () => {
  const { name } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <SideNavTopic topic={`Tag : ${name}`} />
      <TagSearchList name={name} />
      <FloatingButton />
    </div>
  );
};

export default TagSearchPage;
