import { useState, useEffect } from "react";
import { Wrapper } from "../../assets/wrappers/PostPageContainer";
import { customFetch } from "../../utils/axios";
import ByUser from "./ByUser";
import Post from "./Post";
import Recommended from "./Recommended";

const PostPageContainer = ({ id }) => {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [post, setPost] = useState();
  const [mode, setMode] = useState("normal");

  const getPost = async (id) => {
    try {
      setIsPostLoading(true);
      const res = await customFetch.get(`posts/post1/${id}`);
      setPost(res.data);
      setIsPostLoading(false);
    } catch (error) {
      setIsPostLoading(false);
      console.log(error);
    }
  };

  const toggleMode = () => {
    if (mode === "theater") {
      setMode("normal");
      return;
    }
    setMode("theater");
  };

  useEffect(() => {
    getPost(id);
  }, [id]);
  return (
    <Wrapper mode={mode}>
      <section className="post">
        {/* {post && (
          <Post
            post={post}
            toggleMode={toggleMode}
            isPostLoading={isPostLoading}
          />
        )} */}
        <Post
          post={post}
          toggleMode={toggleMode}
          isPostLoading={isPostLoading}
        />
        <div className="comments"></div>
      </section>
      {post && (
        <section className="extras">
          <ByUser
            postId={post._id}
            authorId={post.author.id}
            postAuthorName={post.author.username}
          />
          <Recommended postId={post._id} tags={post.tags} />
        </section>
      )}
    </Wrapper>
  );
};

export default PostPageContainer;
