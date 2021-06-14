import React from "react";
import TopNavResponsive from "../components/Navigation/TopNav";
import SideNavTopic from "../components/SideNavTopic";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import FloatingButton from "../components/Navigation/FloatingButton";
import Popular from "../components/PopularPage/Popular";

const PopularPage = () => {
  return (
    <>
      <div className="Container">
        <TopNavResponsive />
        <SideNavTopic topic="Popular" />
        <SideNavHandler />
        <Alert />
        <FloatingButton />
        <Popular />
      </div>
    </>
  );
};

export default PopularPage;
