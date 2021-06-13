import React from "react";
import TopNav from "../components/TopNav";
import TopNavResponsive from "../components/Navigation/TopNav";
import SideNav from "../components/Navigation/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import LoginModal from "../components/Modals/LoginModal/LoginModal";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import FloatingButton from "../components/Navigation/FloatingButton";
import Popular from "../components/Popular";
import PostList from "../components/PostList";

const PopularPage = () => {
  return (
    <>
      <div className="Container">
        {/* <TopNav /> */}
        <TopNavResponsive />
        {/* <SideNav /> */}
        <SideNavTopic topic="Popular" />
        {/* <LoginModal /> */}
        <SideNavHandler />
        <Alert />
        <FloatingButton />
        <Popular />
        {/* <PostList /> */}
      </div>
    </>
  );
};

export default PopularPage;
