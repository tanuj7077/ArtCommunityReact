import React from "react";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import LoginModal from "../components/Modals/LoginModal/LoginModal";

const PopularPage = () => {
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
      <SideNavTopic topic="Popular" />
      <LoginModal />
    </div>
  );
};

export default PopularPage;
