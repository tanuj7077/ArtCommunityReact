import React, { useState, useContext, useEffect } from "react";
import { Posts, ExploreTags } from "./data";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [explorePageTags, setExplorePageTags] = useState([]);
  const [submitModal, setsubmitModal] = useState(false);
  const [loginModal, setloginModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({});
  const [submitCoverModal, setSubmitCoverModal] = useState(false);
  const [submitProfilePicModal, setSubmitProfilePicModal] = useState(false);
  const [page, setPage] = useState(1);

  const updatePostsBackend = async () => {
    const result = await axios.get("http://localhost:8000/posts/updatePosts");
    console.log(result.data);
  };

  useEffect(() => {
    updatePostsBackend();
  }, []);

  const openSubmitCoverModal = () => {
    setSubmitCoverModal(true);
  };

  const closeSubmitCoverModal = () => {
    setSubmitCoverModal(false);
  };

  const openSubmitProfilePicModal = () => {
    console.log("pressed");
    setSubmitProfilePicModal(true);
  };

  const closeSubmitProfilePicModal = () => {
    setSubmitProfilePicModal(false);
  };

  // const fetchPosts = async () => {
  //   setIsLoading(true);
  //   try {
  //     setPosts(Posts);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchExploreTags = async () => {
    setIsLoading(true);
    try {
      setExplorePageTags(ExploreTags);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const openSubmitModal = () => {
    setsubmitModal(true);
  };

  const closeSubmitModal = () => {
    setsubmitModal(false);
  };

  const openLoginModal = () => {
    setloginModal(true);
  };

  const closeLoginModal = () => {
    setloginModal(false);
  };

  const switchToLogin = () => {
    setIsLogin(true);
  };
  const switchToSignup = () => {
    setIsLogin(false);
  };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  useEffect(() => {
    fetchExploreTags();
  }, []);

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        posts,
        explorePageTags,
        setPosts,
        openSubmitModal,
        closeSubmitModal,
        submitModal,
        openLoginModal,
        closeLoginModal,
        loginModal,
        isLogin,
        switchToLogin,
        switchToSignup,
        setIsLoggedIn,
        userData,
        setUserData,
        submitCoverModal,
        submitProfilePicModal,
        openSubmitCoverModal,
        closeSubmitCoverModal,
        openSubmitProfilePicModal,
        closeSubmitProfilePicModal,
        page,
        setPage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
