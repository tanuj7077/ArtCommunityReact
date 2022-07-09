import { useParams } from "react-router-dom";
import PostPageContainer from "./PostPage/PostPageContainer";
const PostPage = () => {
  const { id } = useParams();
  return <PostPageContainer id={id} />;
};

export default PostPage;
