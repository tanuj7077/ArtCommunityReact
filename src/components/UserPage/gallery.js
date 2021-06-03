import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

const Gallery = ({ userPosts }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const LIMIT = 12;

  const paginate = (postArr, limit, pageNo) => {
    return postArr.slice((pageNo - 1) * limit, pageNo * limit);
  };
  const addPosts = () => {
    var arr = [];
    var paginated = paginate(userPosts, LIMIT, page);
    arr = [...posts, ...paginated];
    setPosts(arr);
  };

  useEffect(() => {
    addPosts();
  }, [page]);

  return (
    <div className="userPage--gallery">
      {posts && (
        <div className="GallerySection">
          <div className="Gallery">
            {posts.map((post) => {
              return (
                <div className="SingleImage">
                  <img src={post.image} alt="galleryImage" className="image" />
                  <div className="info">
                    <Route
                      render={({ history }) => (
                        <span
                          onClick={() => {
                            history.push(`/post/${post._id}`);
                          }}
                          className="name"
                        >
                          {post.name}
                        </span>
                      )}
                    />
                    <div className="others">
                      <span className="likes">
                        {post.likesArray.length} Likes
                      </span>
                      <span className="comments">
                        {post.comments.length} comments
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {posts.length !== userPosts.length && (
            <span className="more" onClick={() => setPage(page + 1)}>
              Load More...
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
