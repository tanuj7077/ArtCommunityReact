import React, { useEffect, Suspense } from "react";

import SideNavTopic from "../components/SideNavTopic";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import TopNavResponsive from "../components/Navigation/TopNav";
import FloatingButton from "../components/Navigation/FloatingButton";
const Explore = React.lazy(() => import("../components/HomePage/Explore"));
const PostList = React.lazy(() => import("../components/HomePage/PostList"));

const Home = () => {
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <SideNavTopic topic="Home" />
      <Suspense fallback={<div>Loading...</div>}>
        <Explore />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <PostList />
      </Suspense>
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default Home;
