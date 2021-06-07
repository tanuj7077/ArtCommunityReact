import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import PostPagePost from "../components/PostPage/PostPagePost";
import Alert from "../components/Modals/Alert/Alert";

const PostPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNav />
      <SideNav />

      <PostPagePost id={id} />
      <Alert />
    </div>
  );
};

export default PostPage;
