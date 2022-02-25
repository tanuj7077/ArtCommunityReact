/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import { useCallback } from "react";
import axios from "axios";
import { IoSearch } from "../../commonImports/reactIcons";
import { useGlobalContext } from "../../context";

const SearchComponent = () => {
  const { changeAlert } = useGlobalContext();
  const [searchStatus, setSearchStatus] = useState(false);
  const searchValue = useRef("");

  const [searchTerm, setSearchTerm] = useState("");
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const [tag, setTag] = useState([]);
  // const [renderCount, setRenderCount] = useState(0);

  // useEffect(() => {
  //   setRenderCount(renderCount + 1);
  //   console.log(renderCount);
  // }, [searchStatus, searchTerm, post, author, tag]);

  //-----------------Disable Search on outside Click-----------------
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          //setSearchTerm("");
          setSearchStatus(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const searchItem = () => {
  //   setSearchTerm(searchValue.current.value);
  // };
  const fetchData = useCallback(async () => {
    try {
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/search`, {
          searchTerm: searchValue.current.value,
        })
        .then((res) => {
          ReactDOM.unstable_batchedUpdates(() => {
            setPost(res.data.posts);
            setTag(res.data.tags);
            setAuthor(res.data.users);
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, [searchValue?.current?.value]);
  // useEffect(() => {
  //   fetchData();
  // }, [searchTerm, fetchData]);

  return (
    <>
      {!searchStatus && (
        <div
          className="search search-desk"
          onClick={() => setSearchStatus(true)}
        >
          <IoSearch className="search-icon" />
          <span className="search-text">SEARCH AND DISCOVER</span>
        </div>
      )}
      {searchStatus && (
        <>
          <div ref={wrapperRef} className="liveSearch liveSearch-desk">
            <form className="searchForm" onSubmit={handleSubmit}>
              <input
                className="searchForm--input"
                type="text"
                id="name"
                ref={searchValue}
                onChange={fetchData}
                placeholder="Search post, tags or user"
              />
            </form>
            {searchValue?.current?.value?.length > 0 && (
              <div className="searchResults">
                <div className="searchResults--postSection">
                  <span className="subHeading">Posts</span>
                  {post.length > 0 ? (
                    <>
                      <ul className="postList">
                        {post.map((item) => {
                          return (
                            <Route
                              key={`searchResults_${item.postId}`}
                              render={({ history }) => (
                                <li
                                  className="item"
                                  onClick={() => {
                                    history.push(`/post/${item.postId}`);
                                  }}
                                >
                                  {item.post}
                                </li>
                              )}
                            />
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <>
                      <span className="notFound">No post found!</span>
                    </>
                  )}
                </div>
                <div className="searchResults--authorSection">
                  <span className="subHeading">Users</span>
                  {author.length > 0 ? (
                    <>
                      <ul className="authorList">
                        {author.map((item, idx) => {
                          // return <li className="item">{item}</li>;
                          return (
                            <Route
                              key={`author_${idx}_${item}`}
                              render={({ history }) => (
                                <li
                                  className="item"
                                  onClick={() => {
                                    history.push(`/user/${item}`);
                                  }}
                                >
                                  {item}
                                </li>
                              )}
                            />
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <>
                      <span className="notFound">No author found!</span>
                    </>
                  )}
                </div>

                <div className="searchResults--tagSection">
                  <span className="subHeading">Tags</span>
                  {tag.length > 0 ? (
                    <>
                      <ul className="tagList">
                        {tag.map((item, idx) => {
                          // return <li className="item">{item}</li>;
                          return (
                            <Route
                              key={`searchTag_${idx}_${item}`}
                              render={({ history }) => (
                                <li
                                  className="item"
                                  onClick={() => {
                                    history.push(`../tagSearch/${item}`);
                                  }}
                                >
                                  {item}
                                </li>
                              )}
                            />
                          );
                        })}
                      </ul>
                    </>
                  ) : (
                    <>
                      <span className="notFound">No tag found!</span>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SearchComponent;
