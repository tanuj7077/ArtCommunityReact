import React, { useState, useContext, useEffect } from "react";
import { Posts, ExploreTags } from "./data";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [explorePageTags, setExplorePageTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      setPosts(Posts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchExploreTags = async () => {
    setIsLoading(true);
    try {
      setExplorePageTags(ExploreTags);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSearchTags = async () => {
    setIsLoading(true);
    try {
      setSearchTags(Posts);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    fetchExploreTags();
  }, []);

  useEffect(() => {
    fetchSearchTags();
  }, []);

  return (
    <AppContext.Provider
      value={{ isLoggedIn, posts, explorePageTags, searchTags }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
