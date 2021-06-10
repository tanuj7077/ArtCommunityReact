import React, { useEffect, Suspense } from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import SideNavTopic from "../components/SideNavTopic";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
//import Explore from "../components/Explore";
const Explore = React.lazy(() => import("../components/Explore"));
const PostList = React.lazy(() => import("../components/PostList"));
//import PostList from "../components/PostList";

const Home = () => {
  return (
    <div className="Container">
      <TopNav />
      {/* <SideNav /> */}
      <SideNavHandler />
      <SideNavTopic topic="Home" />
      <Suspense fallback={<div>Loading...</div>}>
        <Explore />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
      <Alert />
    </div>
  );
};

export default Home;
