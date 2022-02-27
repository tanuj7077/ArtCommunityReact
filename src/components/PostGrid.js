/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useReducer,
  useCallback,
  useRef,
  useState,
} from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import { SinglePost } from "../commonImports/commonImports";

const PostGrid = ({
  type,
  limit,
  fetchPostUrl,
  fetchPostCountUrl,
  showDataOnHover,
  forUser,
  endMessage,
  gridContainer,
}) => {
  const [totalPages, setTotalPages] = useState(1);
  const getTotalPages = async () => {
    let total = await axios.get(fetchPostCountUrl);
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
  const [pager, pagerDispatch] = useReducer(pageReducer, {
    page: 1, //state
  });

  useEffect(() => {
    imgDispatch({ type: "FETCHING_IMAGES", fetching: true });
    setTimeout(() => {
      fetch(`${fetchPostUrl}?page=${pager.page}&limit=${limit}`)
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
    }, 1000);
  }, [imgDispatch, pager.page]);

  // implement infinite scrolling with intersection observer
  let bottomBoundaryRef = useRef(null);
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            if (en.intersectionRatio > 0) {
              pagerDispatch({ type: "ADVANCE_PAGE" });
            }
          });
        },
        {
          rootMargin: "100px",
        }
      ).observe(node);
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
    <div className="gridContainer" ref={gridRef}>
      <ResponsiveMasonry
        columnsCountBreakPoints={
          gridContainer === "small"
            ? { 800: 1, 1000: 2, 1600: 3, 2560: 4 }
            : {
                350: 1,
                600: 2,
                750: 2,
                1000: 3,
                1440: 4,
                2560: 5,
              }
        }
      >
        <Masonry gutter="15px">
          {imgData.images.map((post) => {
            return (
              <SinglePost
                key={`${type}_${post._id}`}
                {...post}
                showDataOnHover={showDataOnHover}
                forUser={forUser}
              />
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      <div className="endMessage">
        {imgData.images.length !== totalPages && imgData.fetching && (
          <span className="loadingAnim">Loading...</span>
        )}
        {endMessage && imgData.images.length >= totalPages && (
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

export default PostGrid;
