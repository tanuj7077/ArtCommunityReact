import React from "react";
import { useParams } from "react-router-dom";

import {
  SideNavDesktop,
  SideNavMobile,
  TopNavResponsive,
  FloatingButton,
  PostPagePost,
} from "../commonImports/commonImports";

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
