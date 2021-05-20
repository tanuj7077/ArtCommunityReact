import React, { useState, useRef, useEffect } from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { useCallback } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [searchStatus, setSearchStatus] = useState(false);
  const searchValue = useRef("");

  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);
  const [tag, setTag] = useState([]);

  //-----------------Disable Search on outside Click-----------------
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
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

  const searchItem = () => {
    setSearchTerm(searchValue.current.value);
  };
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      await axios
        .post("http://localhost:8000/search", { searchTerm: searchTerm })
        .then((res) => {
          setPost(res.data.posts);
          setTag(res.data.tags);
          setAuthor(res.data.users);
          console.log(res.data);
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <>
      {!searchStatus && (
        <div className="topNav--search" onClick={() => setSearchStatus(true)}>
          <span className="material-icons topNav--search-icon">search</span>
          <span className="topNav--search-text">SEARCH AND DISCOVER</span>
        </div>
      )}
      {searchStatus && (
        <>
          <div ref={wrapperRef} className="topNav--liveSearch">
            <form className="searchForm" onSubmit={handleSubmit}>
              <input
                className="searchForm--input"
                type="text"
                id="name"
                ref={searchValue}
                onChange={searchItem}
                placeholder="Search post, tags or user"
              />
            </form>
            <div className="searchResults">
              <div className="searchResults--postSection">
                <span className="subHeading">Posts</span>
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
              <div className="searchResults--authorSection">
                <span className="subHeading">Users</span>
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

              <div className="searchResults--tagSection">
                <span className="subHeading">Tags</span>
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
        </>
      )}
    </>
  );
};

export default SearchComponent;
