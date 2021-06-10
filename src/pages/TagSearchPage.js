import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import TagSearchList from "../components/TagSearchList";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
const TagSearchPage = () => {
  const { name } = useParams();
  return (
    <div className="Container">
      <TopNav />
      {/* <SideNav /> */}
      <SideNavHandler />
      <SideNavTopic topic={`Tag : ${name}`} />
      <TagSearchList name={name} />
      <Alert />
    </div>
  );
};

export default TagSearchPage;
