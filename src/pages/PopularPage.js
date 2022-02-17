import React from "react";
import TopNavResponsive from "../components/Navigation/TopNav";
import SideNavTopic from "../components/SideNavTopic";
import SideNavDesktop from "../components/Navigation/SideNavDesktop";
import SideNavMobile from "../components/Navigation/SideNavMobile";
import FloatingButton from "../components/Navigation/FloatingButton";
import Popular from "../components/PopularPage/Popular";

const PopularPage = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavTopic topic="Popular" />
      <SideNavDesktop />
      <SideNavMobile />
      <FloatingButton />
      <Popular />
    </div>
  );
};

export default PopularPage;
