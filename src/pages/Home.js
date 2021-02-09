import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import Explore from "../components/Explore";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
      <SideNavTopic topic="Home" />
      <Explore />
      <PostList />
    </div>
  );
};

export default Home;
