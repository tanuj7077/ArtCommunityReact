import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import Alert from "../components/Modals/Alert/Alert";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";

const NewPage = () => {
  return (
    <div className="Container">
      {/* <TopNav /> */}
      <TopNavResponsive />
      <SideNav />
      <SideNavTopic topic="New" />
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default NewPage;
