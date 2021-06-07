import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import TagSearchList from "../components/TagSearchList";
import Alert from "../components/Modals/Alert/Alert";
const TagSearchPage = () => {
  const { name } = useParams();
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
      <SideNavTopic topic={`Tag : ${name}`} />
      <TagSearchList name={name} />
      <Alert />
    </div>
  );
};

export default TagSearchPage;
