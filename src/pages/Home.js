import React from "react";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import Explore from "../components/Explore";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <main>
      <h1>Home Page</h1>
      <TopNav />
      <SideNav />
      <Explore />
      <PostList />
    </main>
  );
};

export default Home;
