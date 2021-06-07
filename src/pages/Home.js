import React, { useEffect } from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import Explore from "../components/Explore";
import PostList from "../components/PostList";
import Alert from "../components/Modals/Alert/Alert";

const Home = () => {
  return (
    <div className="Container">
      <TopNav />
      <SideNav />
      <SideNavTopic topic="Home" />
      <Explore />
      <PostList />
      <Alert />
    </div>
  );
};

export default Home;
