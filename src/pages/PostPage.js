import React from "react";
import { useParams } from "react-router-dom";

import TopNavResponsive from "../components/Navigation/TopNav";
import PostPagePost from "../components/PostPage/PostPagePost";
import SideNavDesktop from "../components/Navigation/SideNavDesktop";
import SideNavMobile from "../components/Navigation/SideNavMobile";
import FloatingButton from "../components/Navigation/FloatingButton";

const PostPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNavResponsive />
      <SideNavDesktop />
      <SideNavMobile />
      <PostPagePost id={id} />
      <FloatingButton />
    </div>
  );
};

export default PostPage;
