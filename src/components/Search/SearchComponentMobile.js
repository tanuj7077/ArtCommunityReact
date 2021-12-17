import React, { useState, useRef, useEffect } from "react";
import { Route } from "react-router-dom";
import { useCallback } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";

const SearchComponent = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  const searchValue = useRef("");

  const [searchTerm, setSearchTerm] = useState("");
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const [tag, setTag] = useState([]);

  //-----------------Disable Search on outside Click-----------------
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setSearchTerm("");
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
  //-----------------END-----------------

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchItem = () => {
    setSearchTerm(searchValue.current.value);
  };
  const fetchData = useCallback(async () => {
    try {
      await axios
        .post("https://shielded-woodland-79171.herokuapp.com/search", {
          searchTerm: searchTerm,
        })
        .then((res) => {
          setPost(res.data.posts);
          setTag(res.data.tags);
          setAuthor(res.data.users);
          console.log(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  const moveToPosts = () => {
    document.getElementById("slide-1").scrollIntoView(true);
  };
  const moveToAuthors = () => {
    document.getElementById("slide-2").scrollIntoView(true);
  };
  const moveToTags = () => {
    document.getElementById("slide-3").scrollIntoView(true);
  };

  return (
    <>
      {!searchStatus && (
        <div className="search" onClick={() => setSearchStatus(true)}>
          <IoSearch className="search-icon" />
          <span className="search-text">SEARCH AND DISCOVER</span>
        </div>
      )}
      {searchStatus && (
        <>
          <div ref={wrapperRef} className="liveSearch">
            <form className="liveSearch-searchForm" onSubmit={handleSubmit}>
              <input
                className="liveSearch-searchForm--input"
                type="text"
                id="name"
                ref={searchValue}
                onChange={searchItem}
                placeholder="Search post, tags or user"
              />
            </form>

            {searchTerm.length > 0 && (
              <div className="liveSearch-searchResults2">
                <div className="liveSearch-searchResults2-links">
                  <a className="link" onClick={moveToPosts}>
                    Posts
                  </a>
                  <a className="link" onClick={moveToAuthors}>
                    Author
                  </a>
                  <a className="link" onClick={moveToTags}>
                    Tags
                  </a>
                </div>
                <div className="liveSearch-searchResults2-carousel">
                  <div
                    id="slide-1"
                    className="liveSearch-searchResults2-carousel--postSection"
                  >
                    {post.length > 0 ? (
                      <>
                        <ul className="postList">
                          {post.map((item) => {
                            return (
                              <Route
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
                  <div
                    id="slide-2"
                    className="liveSearch-searchResults2-carousel--authorSection"
                  >
                    {author.length > 0 ? (
                      <>
                        <ul className="authorList">
                          {author.map((item) => {
                            // return <li className="item">{item}</li>;
                            return (
                              <Route
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
                  <div
                    id="slide-3"
                    className="liveSearch-searchResults2-carousel--tagSection"
                  >
                    {tag.length > 0 ? (
                      <>
                        <ul className="tagList">
                          {tag.map((item) => {
                            // return <li className="item">{item}</li>;
                            return (
                              <Route
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
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default SearchComponent;
