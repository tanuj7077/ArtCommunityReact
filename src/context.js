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
  const [loginModal2, setloginModal2] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState({});
  const [submitCoverModal, setSubmitCoverModal] = useState(false);
  const [submitProfilePicModal, setSubmitProfilePicModal] = useState(false);
  const [page, setPage] = useState(1);
  const [alert, setAlert] = useState({});
  const [showAlert, setShowAlert] = useState(0);

  const updatePostsBackend = async () => {
    const result = await axios.get("http://localhost:8000/posts/updatePosts");
    console.log(result.data);
  };
  const fetchExploreTags = async () => {
    let url = "http://localhost:8000/tags/exploreTags";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setExplorePageTags(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updatePostsBackend();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      fetchExploreTags();
    }, 3000);
    //updatePostsBackend();
  }, []);

  const changeAlert = (msg) => {
    setAlert(msg);
    setShowAlert(1);
  };

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
  const openLoginModal2 = () => {
    setloginModal2(true);
  };

  const closeLoginModal2 = () => {
    setloginModal2(false);
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
        setExplorePageTags,
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
        loginModal2,
        openLoginModal2,
        closeLoginModal2,
        alert,
        changeAlert,
        showAlert,
        setShowAlert,
        updatePostsBackend,
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
