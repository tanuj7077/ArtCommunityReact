import React, { useState, useEffect } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { SinglePost } from "../../commonImports/commonImports";

const TagSearchList = ({ name }) => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  let url = `${process.env.REACT_APP_BASE_URL}/tags/tag/${name}`;

  const fetchPosts = async () => {
    setPosts([]);
    setMessage("Loading...");
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        if (result.length === 0) {
          setMessage("No posts in this category yet");
        } else {
          setPosts(result);
        }
      })
      .catch((e) => {
        setMessage("Could not get the data");
        console.log(e);
      });
  };
  useEffect(() => {
    fetchPosts();
  }, [name]);
  return (
    <div className="main tagSearchList">
      {posts.length === 0 && <div className="message">{message}</div>}
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 1,
          600: 2,
          750: 2,
          1000: 3,
          1440: 4,
          2560: 5,
        }}
      >
        <Masonry gutter="15px">
          {posts.map((post) => {
            return (
              <SinglePost
                key={`tagSearchPost_${post}`}
                {...post}
                showDataOnHover={true}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default TagSearchList;
