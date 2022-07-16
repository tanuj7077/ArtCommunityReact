import { useState, useEffect } from "react";
import { Wrapper } from "../../assets/wrappers/PostPageContainer";
import Fullscreen from "../../components/modals/Fullscreen";
import Modal from "../../components/modals/Modal";
import { customFetch } from "../../utils/axios";
import ByUser from "./ByUser";
import Post from "./Post";
import Recommended from "./Recommended";

const PostPageContainer = ({ id }) => {
  const [isPostLoading, setIsPostLoading] = useState(false);
  const [post, setPost] = useState();
  const [mode, setMode] = useState("normal");
  const [fullscreen, setFullscreen] = useState(false);

  const getPost = async (id) => {
    try {
      setIsPostLoading(true);
      const res = await customFetch.get(`posts/post1/${id}`);
      setPost(res.data);
      console.log(res.data);
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

  const toggleFullscreen = () => {
    setFullscreen((prev) => !prev);
  };

  useEffect(() => {
    getPost(id);
  }, [id]);
  return (
    <Wrapper mode={mode}>
      <section className="post">
        <Post
          post={post}
          toggleMode={toggleMode}
          isPostLoading={isPostLoading}
          toggleFullscreen={toggleFullscreen}
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
      {/* {fullscreen && post && (
        <section className="fullscreen">
          <img src={post.image} alt="image_fullsize" />
        </section>
      )} */}
      {fullscreen && (
        <Modal toggleHandler={toggleFullscreen}>
          <Fullscreen toggleHandler={toggleFullscreen} image={post.image} />
        </Modal>
      )}
    </Wrapper>
  );
};

export default PostPageContainer;
