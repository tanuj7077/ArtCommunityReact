import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import PostPagePost from "../components/PostPage/PostPagePost";

const PostPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNav />
      <SideNav />

      <PostPagePost id={id} />
    </div>
  );
};

export default PostPage;
