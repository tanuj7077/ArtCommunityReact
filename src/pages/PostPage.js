import React from "react";
import { useParams } from "react-router-dom";

import TopNavResponsive from "../components/Navigation/TopNav";
import PostPagePost from "../components/PostPage/PostPagePost";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";
import FloatingButton from "../components/Navigation/FloatingButton";

const PostPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavHandler />
      <PostPagePost id={id} />
      <Alert />
      <FloatingButton />
    </div>
  );
};

export default PostPage;
