import React, { useEffect, useReducer, useCallback, useRef } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import SinglePost from "./SinglePost";

const Popular = () => {
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
    fetch(`/posts/getPopular?page=${pager.page}&limit=12`)
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
            console.log(pager.page);
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

  return (
    <div className="main">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 600: 2, 750: 2, 900: 3, 1000: 4 }}
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
        style={{ border: "10px solid transparent" }}
        ref={bottomBoundaryRef}
      ></div>
    </div>
  );
};

export default Popular;