import React from "react";

import SideNavTopic from "../components/SideNavTopic";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";
import Explore from "../components/HomePage/Explore";
import PostList from "../components/HomePage/PostList";

const Home = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <SideNavTopic topic="Home" />
      <Explore />
      <PostList />
      <FloatingButton />
    </div>
  );
};

export default Home;
