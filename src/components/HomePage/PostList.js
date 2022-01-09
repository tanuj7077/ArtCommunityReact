import React, {
  useEffect,
  useReducer,
  useCallback,
  useRef,
  useState,
} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import SinglePost from "./SinglePost";

const PostList = () => {
  const [totalPages, setTotalPages] = useState(1);
  const getTotalPages = async () => {
    let total = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/posts/totalPosts`
    );
    setTotalPages(total.data);
  };
  useEffect(() => {
    getTotalPages();
  }, []);

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
  const LIMIT = 8;
  const [pager, pagerDispatch] = useReducer(pageReducer, {
    page: 1, //state
  });

  useEffect(() => {
    imgDispatch({ type: "FETCHING_IMAGES", fetching: true });
    fetch(
      `${process.env.REACT_APP_BASE_URL}/posts/postList?page=${pager.page}&limit=${LIMIT}`
    )
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

  const gridRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (gridRef && gridRef.current) {
        if (
          gridRef.current.getBoundingClientRect().height < window.innerHeight &&
          imgData.images.length !== totalPages
        ) {
          pagerDispatch({ type: "ADVANCE_PAGE" });
        }
      }
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="main" ref={gridRef}>
      <div className="subHeading">Discover</div>
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
          {imgData.images.map((post) => {
            return <SinglePost key={post._id} {...post} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
      <div className="endMessage">
        {/* <span className="completed">
          Total={totalPages}, length={imgData.images.length}
        </span> */}
        {imgData.images.length !== totalPages && imgData.fetching && (
          <span className="loadingAnim">Loading...</span>
        )}
        {imgData.images.length >= totalPages && (
          <span className="completed">Thats all Folks</span>
        )}
      </div>

      <div
        id="page-bottom-boundary"
        style={{ border: "10px solid transparent" }}
        ref={bottomBoundaryRef}
      ></div>
    </div>
  );
};

export default PostList;
