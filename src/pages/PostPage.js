import React from "react";
import { useParams } from "react-router-dom";

import TopNav from "../components/TopNav";
import SideNav from "../components/Navigation/SideNav";
import PostPagePost from "../components/PostPage/PostPagePost";
import Alert from "../components/Modals/Alert/Alert";
import SideNavHandler from "../components/Navigation/SideNavHandler";

const PostPage = () => {
  const { id } = useParams();
  return (
    <div className="Container">
      <TopNav />
      {/* <SideNav /> */}
      <SideNavHandler />

      <PostPagePost id={id} />
      <Alert />
    </div>
  );
};

export default PostPage;
