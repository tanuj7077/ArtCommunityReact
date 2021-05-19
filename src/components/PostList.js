import React, {
  useEffect,
  useState,
  useReducer,
  useCallback,
  useRef,
} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";

import SinglePost from "./SinglePost";
import { useGlobalContext } from "../context";

const PostList = () => {
  const imgReducer = (state, action) => {
    switch (action.type) {
      case "STACK_IMAGES":
        return { ...state, images: state.images.concat(action.images) };
      case "FETCHING_IMAGES":
        return { ...state, fetching: action.fetching };
      default:
        return state;
    }
  };
  const pageReducer = (state, action) => {
    switch (action.type) {
      case "ADVANCE_PAGE":
        return { ...state, page: state.page + 1 };
      default:
        return state;
    }
  };
  const [imgData, imgDispatch] = useReducer(imgReducer, {
    images: [], //state
    fetching: true, //action
  });
  const [pager, pagerDispatch] = useReducer(pageReducer, {
    page: 1, //state
  });

  useEffect(() => {
    imgDispatch({ type: "FETCHING_IMAGES", fetching: true });
    fetch(`http://localhost:8000/posts/postList?page=${pager.page}&limit=8`)
      .then((data) => data.json())
      .then((images) => {
        imgDispatch({ type: "STACK_IMAGES", images });
        imgDispatch({ type: "FETCHING_IMAGES", fetching: false });
      })
      .catch((e) => {
        // handle error
        imgDispatch({ type: "FETCHING_IMAGES", fetching: false });
        return e;
      });
  }, [imgDispatch, pager.page]);

  // implement infinite scrolling with intersection observer
  let bottomBoundaryRef = useRef(null);
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            pagerDispatch({ type: "ADVANCE_PAGE" });
          }
        });
      }).observe(node);
    },
    [pagerDispatch]
  );

  useEffect(() => {
    if (bottomBoundaryRef.current) {
      scrollObserver(bottomBoundaryRef.current);
    }
  }, [scrollObserver, bottomBoundaryRef]);

  /*const { posts, setPosts, page, setPage } = useGlobalContext();

  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    let baseUrl = "http://localhost:8000/posts/postList";
    const urlPage = `?page=${page}`;
    const urlLimit = `&limit=${limit}`;
    let url = `${baseUrl}${urlPage}${urlLimit}`;
    try {
      console.log(page);
      const response = await fetch(url);
      const data = await response.json();
      setPosts((oldPhotos) => {
        //return [...oldPhotos, ...data];
        var arr = [];
        data.forEach((item) => {
          if (!oldPhotos.includes(item)) {
            arr.push(item);
          }
        });
        return [...oldPhotos, ...arr];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };*/
  /*useEffect(() => {
    fetchPosts();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        (!loading && window.innerHeight + window.scrollY) >=
        document.body.scrollHeight - 10
      ) {
        console.log("page = ", page);
        console.log(
          "(page + 1) * limit - limit = ",
          (page + 1) * limit - limit
        );
        console.log("postLength = ", posts.length);
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);*/

  return (
    <div className="main">
      <div className="subHeading">Discover</div>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {imgData.images.map((post) => {
            return <SinglePost key={post.name} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
      {imgData.fetching && <span className="loadingAnim">Loading...</span>}
      <div
        id="page-bottom-boundary"
        //style={{ border: "1px solid red" }}
        ref={bottomBoundaryRef}
      ></div>
      {/* <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1000: 4 }}
      >
        <Masonry>
          {posts.map((post) => {
            return <SinglePost key={post.name} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry> */}
      {/* {loading && <span className="loadingAnim">Loading...</span>} */}
    </div>
  );
};

export default PostList;
