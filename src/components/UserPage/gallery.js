import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SinglePost from "../SinglePost";

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
      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {userPosts.map((post) => {
            return <SinglePost key={post._id} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry> */}
      {/* <div className="l">
        <div className="l-m">
          {userPosts.map((post) => {
            return (
              <div className="gallery-item">
                <img
                  draggable="false"
                  src={post.image}
                  alt=""
                  className="gallery-img"
                />
              </div>
            );
          })}
        </div>
      </div> */}
      {posts && (
        <div className="GallerySection">
          <div className="Gallery">
            {posts.map((post) => {
              return (
                <div className="SingleImage">
                  <img src={post.image} alt="galleryImage" className="image" />
                  <div className="info">
                    <span className="name">{post.name}</span>
                    <span className="author">{post.author.username}</span>
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
